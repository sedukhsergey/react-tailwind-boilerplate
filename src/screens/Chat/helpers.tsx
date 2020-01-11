import React, { useMemo } from 'react';
import { User } from '../../modules/Chat/types';
import { Card, H2, List, Text } from '../../components';

export const useOnlineList = (usersOnlineList: User[]) => {
    const renderUsersOnlineList = useMemo(() => {
        return usersOnlineList.length ? (
            <Card>
                <H2 looks={'default center'}>Online users:</H2>
                <List>
                    {usersOnlineList.map((item: User) => {
                        return <Text key={item.id}>{item.name}</Text>;
                    })}
                </List>
            </Card>
        ) : null;
    }, [usersOnlineList]);
    return [renderUsersOnlineList];
};
