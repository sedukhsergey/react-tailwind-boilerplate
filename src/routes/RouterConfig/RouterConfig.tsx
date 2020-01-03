import React from 'react';
import { Redirect } from 'react-router-dom';
import { DashboardLayout, Layout404 } from '../../layouts';
import { Main, Page404 } from '../../screens';
import { useMatch } from '../../hooks';
const RouterConfig = () => {
    const match = useMatch();
    return {
        routes: [
            {
                path: `${match.path}/dashboard`,
                component: DashboardLayout,
                children: <Main />,
                status: 'default'
            },
            {
                path: `${match.path}/404`,
                exact: true,
                component:Layout404,
                children: <Page404 />,
                status: 'default'
            },
        ],
        noRouteFound: <Redirect from={'*'} to={`${match.path}/404`} />
    };
};

export default RouterConfig;
