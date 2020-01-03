import React from 'react';
import { Route } from 'react-router-dom';
import {
    PrivateRoute,
    WithRole
    //     PublicRouteContainer,
} from '../../routes';


type RouteElement = {
    path: string;
    exact?: boolean;
    component: React.ReactElement;
    children: React.ReactElement;
    status: string;
    allowedRoles?: string[];
};
type Props = {
    status: string;
    component: React.ReactNode | any;
    routes?: RouteElement[];
    allowedRoles?: string[];
    children?: React.ReactNode | string;
    path: string;
};
const RouteWithSubRoutes = ({
    status,
    component: Layout,
    allowedRoles = [],
    routes,
    children,
    path,
    ...rest
}: Props) => {
    if (status === 'private') {
        return (
            <PrivateRoute
                path={path}
                component={
                    allowedRoles.length
                        ? WithRole({ allowedRoles, wrapper: Layout })
                        : Layout
                }
                children={children}
                routes={routes}
                {...rest}
            />
        );
    }
    //
    // if (status === 'public') {
    //     return (
    //         <PublicRouteContainer
    //             component={Layout}
    //             routes={routes}
    //             children={children}
    //             {...rest}
    //         />
    //     );
    // }
    return (
        <Route
            path={path}
            render={props => {
                return (
                    <Layout routes={routes} children={children} {...props} />
                );
            }}
        />
    );
};

export default RouteWithSubRoutes;
