import React from 'react';
import { Redirect } from 'react-router';
import { localStorage } from '../../utils';
const Navigator = () => {
    // role should be receive from context or props or redux or localStorage
    const role = localStorage.getItem('role');
    if (role === 'member') {
        return <Redirect to="/main" />;
    }
    if (role === 'admin') {
        return <Redirect to="/admin" />;
    }
    return <Redirect to="/login" />;
};

export default Navigator;
