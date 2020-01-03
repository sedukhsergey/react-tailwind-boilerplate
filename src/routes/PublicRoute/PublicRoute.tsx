import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { localStorage } from '../../utils';

type RouteElement = {
    path: string;
    exact?: boolean;
    component: React.ReactElement;
    children: React.ReactElement;
    status: string;
    allowedRoles?: string[];
};

type Props = {
    path: string;
    component: React.ReactNode | any;
    children: React.ReactNode | string;
    routes?: RouteElement[];
};

const PublicRoute: React.FC<Props> = ({
    component: Component,
    children,
    path,
    routes,
}) => {
    return (
        <Route
            path={path}
            render={props => {
                const authToken = localStorage.getItem('authToken');
                return typeof authToken === 'string' ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />
                ) : (
                    <Component {...props} path={path} routes={routes} children={children} />
                );
            }}
        />
    );
};

export default PublicRoute;
