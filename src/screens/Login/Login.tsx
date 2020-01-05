import React from 'react';
import { Chat } from '../../modules';
import { Card, H2, HorizontalLine } from '../../components';

const Login = () => {
    return (
        <Card>
            <H2 looks={'orange center'}>Simple chat</H2>
            <HorizontalLine looks={'default gray'} customStyles={{marginBottom: '8px'}}/>
            <Chat />
        </Card>
    );
};

export default Login;
