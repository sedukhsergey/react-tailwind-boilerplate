import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { localStorage } from "../../utils";

type RouteElement = {
    path: string;
    exact?: boolean;
    component: React.ReactElement;
    children: React.ReactElement;
    status: string;
    allowedRoles?: string[]
};

type Props = {
    path: string;
    component: React.ReactNode | any;
    children: React.ReactNode | string;
    routes?: RouteElement[];
};
const PrivateRoute: React.FC<Props> = ({
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
                return typeof authToken === 'string'  ? (
                    <Component routes={routes} match={props.match} children={children} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                );
            }}
        />
    );
};

export default PrivateRoute;
