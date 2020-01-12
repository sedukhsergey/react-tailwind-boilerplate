import React, { useCallback, useMemo } from 'react';
import BlueIcon from '../../images/react.svg';
import TypingIcon from '../../images/typing.svg';
import { Text } from '../../components';
import io from 'socket.io-client';
import { Message, User } from './types';

export const useCurrentIcon = (userId: string) => {
    const renderCurrentIcon = useCallback(
        (id: string) => {
            return id !== userId ? BlueIcon : '';
        },
        [userId]
    );
    return [renderCurrentIcon];
};
export const useRenderPlaceholder = (typingStatus: string) => {
    const placeholderStatus = useMemo(() => {
        return typingStatus
            ? `${typingStatus} is typing...`
            : 'Your message...';
    }, [typingStatus]);
    return [placeholderStatus];
};
export const useRenderTypingStatus = (typingStatus: string) => {
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
    return [renderTypingStatus];
};

export class ChatSocket {
    private socket: any;
    constructor(path: string) {
        console.log('path',path)
        this.socket = io.connect(path);
    }
    public changeMessage(userId: string) {
        this.socket.emit('start typing', userId);
    }
    public chatMessage(message: string) {
        this.socket.emit('chat_message', message);
    }
    public handleChatMessage(cb: Function) {
        this.socket.on('chat_message', (msg: Message) => {
            cb(msg);
        });
    }
    public submitUserName(userName: string, userId: string, cb: Function) {
        this.socket.emit('setName', userName, userId, (data: User) => {
            cb(data.name);
        });
    }
    public getUserId(cb: Function) {
        this.socket.on('getId', (id: string) => {
            cb(id);
        });
    }
    public handleUserTyping(cb: Function) {
        this.socket.on('user typing', (userName: string) => {
            cb(userName);
        });
    }
    public handleStopTyping(cb: Function) {
        this.socket.on('stop typing', () => {
            cb();
        });
    }
    public handleUserDisconnected(cb: Function) {
        this.socket.on('is_disconnect', (id: string) => {
            cb(id);
        });
    }
    public handleCheckIsUserOnline(cb: Function) {
        this.socket.on('is_online', (user: User) => {
            cb(user);
        });
    }
}
