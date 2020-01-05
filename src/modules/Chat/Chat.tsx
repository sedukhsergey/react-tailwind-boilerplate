import React, { useState, useCallback, useEffect } from 'react';
import io from 'socket.io-client';
import { Button, Input, List } from '../../components';
import { ChatMessage } from '../../modules';
import BlueIcon from '../../images/react.svg';
import { User, Message } from './types';

const socket = io.connect('http://localhost:8080');
const Chat = () => {
    const [usersOnlineList, setUsersOnlineList] = useState<User[]>([]);
    const [messagesList, setMessagesList] = useState<Message[]>([]);
    const [message, setMessage] = useState('');

    const renderCurrentIcon = useCallback((num: string) => {
        if (usersOnlineList.length) {
            return num !== usersOnlineList[0].id ? BlueIcon : '';
        } return ''
    }, [usersOnlineList]);

    const isUser = useCallback((num: string) => {
        if (usersOnlineList.length) {
            return usersOnlineList[0].id === num
        } return false;
    }, [usersOnlineList]);

    const handleChangeMessage = useCallback(e => {
        setMessage(e.target.value);
    }, []);

    const handleBtnSubmit = useCallback(() => {
        socket.emit('chat_message', message);
    }, [message]);

    useEffect(() => {
        socket.on('is_disconnect', (id: string) => {
            setUsersOnlineList(state => state.filter((i: User) => i.id !== id))
        })
    }, []);

    useEffect(() => {
        socket.on('is_online', (user: User) => {
            if (user) {
                setUsersOnlineList((state: User[]) => [...state, user]);
            }
        });
    }, []);

    useEffect(() => {
        socket.on('chat_message', (msg: Message) => {
            setMessagesList((state) => [...state, msg]);
            setMessage('');
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
                            isUser={isUser(item.id)}
                        >
                            {item.message}
                        </ChatMessage>
                    );
                })}
            </List>
            <div className={'flex flex-col md:flex-row md:justify-around'}>
                <div
                    className={
                        'md:mb-0 md:w-2/4 mb-4  flex justify-center items-center'
                    }
                >
                    <Input
                        placeholder={'Your message...'}
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
    );
};

export default React.memo(Chat);
