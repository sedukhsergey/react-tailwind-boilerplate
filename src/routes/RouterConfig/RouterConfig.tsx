import React from 'react';
import { Redirect } from 'react-router-dom';
import { DashboardLayout, Layout404, PublicLayout } from '../../layouts';
import { Main, Page404, Login } from '../../screens';
import { useMatch } from '../../hooks';
import { Navigator } from '../../routes';
const RouterConfig = () => {
    const match = useMatch();
    return {
        routes: [
            {
                path: `${match.path}/login`,
                component: PublicLayout,
                children: <Login />,
                status: 'default'
            },
            {
                path: `${match.path}/main`,
                component: DashboardLayout,
                children: <Main />,
                allowedRoles: ['member'],
                status: 'private'
            },
            {
                path: `${match.path}/404`,
                exact: true,
                component: Layout404,
                children: <Page404 />,
                status: 'default'
            },
            {
                path: `${match.path}`,
                exact: true,
                component: Navigator,
                status: 'default'
            }
        ],
        noRouteFound: <Redirect from={'*'} to={`${match.path}/404`} />
    };
};

export default RouterConfig;
