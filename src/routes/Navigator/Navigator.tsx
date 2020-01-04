import React from 'react';
import { Redirect } from 'react-router';
import { localStorage } from '../../utils';
import { RoutesList } from '../../routes';

const Navigator = () => {
    // role should be receive from context or props or redux or localStorage
    const role = localStorage.getItem('role');
    if (role === 'member') {
        return <Redirect to={`${RoutesList.main}`} />;
    }
    // for admin role
    if (role === 'admin') {
        return <Redirect to={`${RoutesList.admin}`} />;
    }
    return <Redirect to={`${RoutesList.login}`} />;
};

export default Navigator;
