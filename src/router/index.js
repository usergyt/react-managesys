import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Test from 'bundle-loader?lazy&name=test!pages/Test/Test';

import Layout from 'bundle-loader?lazy&name=layout!pages/Layout';
import Login from 'bundle-loader?lazy&name=login!pages/Login';
import UserManage from 'bundle-loader?lazy&name=userManage!pages/UserManage';
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Loading />
        }
    </Bundle>
);
export const childRoutes = [
    {
        'path': '/',
        'component': createComponent(UserManage),
        exact: true,
    },
    {
        'path': '/userManage',
        'component': createComponent(UserManage)
    },
    {
        'path': '/test',
        'component': createComponent(Test)
    },
    {
        'path': '/login',
        'component': createComponent(Login)
    },
];

export default () => (
    <div className="content">
         <Switch>
             {/* <Route path="/TableTest" component={TableTest} /> */}
             <Route path="/login" component={createComponent(Login)} />  
             <Route path="/" component={createComponent(Layout)} />
            <Route path="/test" component={createComponent(Test)} />
            <Route path="/userManage" component={createComponent(UserManage)} />

            </Switch>
     </div>
);
