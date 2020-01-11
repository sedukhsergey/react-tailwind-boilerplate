import React, { useState } from 'react';
import { Chat } from '../../modules';
import { User } from '../../modules/Chat/types';
import { useOnlineList } from './helpers';
import { Card, H2, HorizontalLine } from '../../components';

const ChatScreen = () => {
    const [name, setName] = useState<null | string>(null);
    const [usersOnlineList, setUsersOnlineList] = useState<User[]>([]);
    const [renderUsersOnlineList] = useOnlineList(usersOnlineList);
    return (
        <Card>
            <H2 looks={'orange center'}>Simple chat: {name}</H2>
            {renderUsersOnlineList}
            <HorizontalLine
                looks={'default gray'}
                customStyles={{ marginBottom: '8px' }}
            />
            <Chat
                setName={setName}
                name={name}
                setUsersOnlineList={setUsersOnlineList}
            />
        </Card>
    );
};

export default ChatScreen;
