import React, { lazy } from 'react';

import { Switch, Route } from 'react-router';

import LayoutWrapper from '@src/wrappers/layoutWrapper';
import RouterWrapper from '@src/wrappers/routerWrapper';
import ReduxWrapper from '@src/wrappers/reduxWrapper';

const Main = lazy(() => import('@src/pages/main'));
const Todos = lazy(() => import('@src/pages/todos'));

export default () => (
  <ReduxWrapper>
    <RouterWrapper>
      <LayoutWrapper>
        <Switch>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </LayoutWrapper>
    </RouterWrapper>
  </ReduxWrapper>
);
