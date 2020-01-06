import React, { useState, useCallback, useEffect } from 'react';
import io from 'socket.io-client';
import { Button, Input, List } from '../../components';
import { ChatMessage } from '../../modules';
import { User, Message } from './types';
import {
    useCurrentIcon,
    useRenderPlaceholder,
    useRenderTypingStatus
} from './helpers';

const socket = io.connect('http://localhost:8080');
const Chat = () => {
    const [usersOnlineList, setUsersOnlineList] = useState<User[]>([]);
    const [typingStatus, setTypingStatus] = useState('');
    const [userId, setUserId] = useState('');
    const [messagesList, setMessagesList] = useState<Message[]>([]);
    const [message, setMessage] = useState('');

    const [renderPlaceholder] = useRenderPlaceholder(typingStatus);
    const [renderTypingStatus] = useRenderTypingStatus(typingStatus);
    const [renderCurrentIcon] = useCurrentIcon(userId);

    const isCurrentUser = useCallback(
        (id: string) => {
            return userId === id;
        },
        [userId]
    );

    const handleChangeMessage = useCallback(
        e => {
            setMessage(e.target.value);
            socket.emit('start typing', userId);
        },
        [userId]
    );
    const handleEnterPress = useCallback(e => {
        if (e.key === 'Enter') {
            socket.emit('chat_message', e.target.value);
        }
    }, []);
    const handleBtnSubmit = useCallback(() => {
        socket.emit('chat_message', message);
    }, [message]);
    // переделать список активных пользоавтелей и выводить их. Передавать также имя и ваводить его.
    useEffect(() => {
        socket.on('getId', (id: string) => {
            setUserId(id);
        });

        socket.on('chat_message', (msg: Message) => {
            setMessagesList(state => [...state, msg]);
            setTypingStatus('');
            setMessage('');
        });

        socket.on('is_disconnect', (id: string) => {
            setUsersOnlineList(state => state.filter((i: User) => i.id !== id));
        });

        socket.on('is_online', (user: User) => {
            setUsersOnlineList((state: User[]) => [...state, user]);
        });

        socket.on('user typing', (userName: string) => {
            setTypingStatus(() => userName);
        });

        socket.on('stop typing', (userName: string) => {
            setTypingStatus('');
        });
    }, []);
    return (
        <div>
            <List looks={'center'} customStyles={{ marginBottom: '8px' }}>
                {messagesList.map((item: Message, index: number) => {
                    return (
                        <ChatMessage
                            key={index}
                            src={renderCurrentIcon(item.id)}
                            alt={'user logo'}
                            isCurrentUser={isCurrentUser(item.id)}
                        >
                            {item.message}
                        </ChatMessage>
                    );
                })}
            </List>
            <div className={'flex flex-col md:justify-around '}>
                {renderTypingStatus}
                <div className={'md:flex-row flex justify-between flex-col '}>
                    <div
                        className={
                            'md:mb-0 md:w-4/6 mb-4  flex justify-center items-center'
                        }
                    >
                        <Input
                            placeholder={renderPlaceholder}
                            value={message}
                            name={'message'}
                            onChange={handleChangeMessage}
                            onKeyPress={handleEnterPress}
                        />
                    </div>
                    <div className={'flex justify-center items-center'}>
                        <Button
                            handleClick={handleBtnSubmit}
                            looks={'default large orange'}
                            isDisabled={!message}
                        >
                            Add message
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Chat);
