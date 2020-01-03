import React from 'react';
import { Redirect } from 'react-router-dom';
import { localStorage } from '../../utils';

type Props = {
    allowedRoles: string[];
    wrapper: React.ReactElement | any;
};

// Role authorization HOC
const WithRole: React.FC<Props> = ({
    allowedRoles,
    wrapper: WrappedComponent
}) => {
    const currentRole = localStorage.getItem('role');
    if (
        typeof currentRole === 'string' &&
        allowedRoles.length &&
        allowedRoles.includes(currentRole)
    ) {
        return WrappedComponent;
    }
    return <Redirect to={'/'} />;
};

export default WithRole;
