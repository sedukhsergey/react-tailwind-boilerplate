import React, { useState, useCallback } from 'react';
import { Button, List } from '../../components';
import { ChatMessage } from '../../modules';
import { isOdd } from '../../utils';
import RedIcon from '../../images/redLogo.svg';
import BlueIcon from '../../images/react.svg';

const Chat = () => {
    const [messagesList, setMessagesList] = useState<string[]>([]);
    const [message, setMessage] = useState('');
    const renderCurrentIcon = useCallback((num: number) => {
        return isOdd(num) ? RedIcon : BlueIcon;
    }, []);
    const isUser = useCallback((num: number) => {
        return Boolean(isOdd(num));
    }, []);
    return (
        <div>
            <List customStyles={{ marginBottom: '8px' }}>
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
                <div className={'md:mb-0 md:w-2/4 mb-4  flex justify-center items-center'}>
                    <input
                        placeholder={'Your message...'}
                        className={'border-solid border-2 border-gray-400 rounded p-2 w-full'}
                        type="text"
                        value={message}
                        name={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </div>
                <div className={'flex justify-center items-center'}>
                    <Button
                        handleClick={() => {
                            setMessagesList((state: string[]) => [
                                ...state,
                                message
                            ])
                            setMessage('')
                        }
                        }
                        looks={'default large orange'}
                    >
                        Add message
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Chat);
