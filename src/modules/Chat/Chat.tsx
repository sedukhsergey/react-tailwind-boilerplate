import React, { useState, useCallback } from 'react';
import { Button, Input, List } from '../../components';
import { ChatMessage } from '../../modules';
import { isOdd } from '../../utils';
import BlueIcon from '../../images/react.svg';

const Chat = () => {
    const [messagesList, setMessagesList] = useState<string[]>([]);
    const [message, setMessage] = useState('');
    const renderCurrentIcon = useCallback((num: number) => {
        return !isOdd(num) ? BlueIcon : '';
    }, []);
    const isUser = useCallback((num: number) => {
        return Boolean(isOdd(num));
    }, []);
    const handleChangeMessage = useCallback(e => {
        setMessage(e.target.value);
    }, []);
    const handleBtnSubmit = useCallback(() => {
        setMessagesList((state: string[]) => [...state, message]);
        setMessage('');
    }, [message]);
    return (
        <div>
            <List looks={'center'} customStyles={{ marginBottom: '8px' }}>
                {messagesList.map((i: string, index: number) => {
                    return (
                        <ChatMessage
                            key={i}
                            src={renderCurrentIcon(index)}
                            alt={'user logo'}
                            isUser={isUser(index)}
                        >
                            {i}
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
