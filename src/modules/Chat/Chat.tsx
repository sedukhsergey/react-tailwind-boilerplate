import React, { useState, useCallback, useEffect, useMemo } from 'react';
import io from 'socket.io-client';
import { Button, Input, List, Text } from '../../components';
import { ChatMessage } from '../../modules';
import BlueIcon from '../../images/react.svg';
import TypingIcon from '../../images/typing.svg';
import { User, Message } from './types';

const socket = io.connect('http://localhost:8080');
const Chat = () => {
    const [usersOnlineList, setUsersOnlineList] = useState<User[]>([]);
    const [typingStatus, setTypingStatus] = useState('');
    const [userId, setUserId] = useState('');
    const [messagesList, setMessagesList] = useState<Message[]>([]);
    const [message, setMessage] = useState('');

    const renderCurrentIcon = useCallback(
        (id: string) => {
            return id !== userId ? BlueIcon : '';
        },
        [userId]
    );

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

    const renderPlaceholder = useMemo(() => {
        return typingStatus
            ? `${typingStatus} is typing...`
            : 'Your message...';
    }, [typingStatus]);

    const renderTypingStatus = useMemo(() => {
        return typingStatus ? (
            <div className={'flex items-center ml-2 mb-2'}>
                <img
                    src={TypingIcon}
                    alt="user typing"
                    className={'w-4 h-4 mr-4'}
                />
                <Text looks={'smallNote'}>{typingStatus} is typing...</Text>
            </div>
        ) : null;
    }, [typingStatus]);
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
                        />
                    </div>
                    <div className={'flex justify-center items-center'}>
                        <Button
                            handleClick={handleBtnSubmit}
                            looks={'default large orange'}
                            // isDisabled
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
