import React, { useState } from 'react';
import { Chat } from '../../modules';
import { Card, H2, HorizontalLine } from '../../components';
import { useOnlineList } from './helpers';
import { User } from '../../modules/Chat/types';

const Login = () => {
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

export default Login;
