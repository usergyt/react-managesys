import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

// import Test from 'bundle-loader?lazy&name=userInfo!pages/Test/Test';
import Test from '../pages/Test/Test';
import Layout from '../pages/Layout';
  
 import TableTest from '../pages/TableTest';
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Loading />
        }
    </Bundle>
);
export const childRoutes = [
    {
      'path':'/tabletest',
      'component': TableTest
    },
    {
      'path':'/test',
      'component': Test
    }
  ];
  
export default () => (
    <div>
        <Switch>
             {/* <Route path="/TableTest" component={TableTest} /> */}
            <Route path="/" component={Layout} />
            <Route path="/test" component={createComponent(Test)} />
         </Switch>
    </div>
);
