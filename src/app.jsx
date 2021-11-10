import React, { Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router';

import LayoutWrapper from '@src/wrappers/layoutWrapper';
import RouterWrapper from '@src/wrappers/routerWrapper';
import ReduxWrapper from '@src/wrappers/reduxWrapper';

import Loading from '@src/components/loading';

const Main = lazy(() => import('@src/pages/main'));
const Todos = lazy(() => import('@src/pages/todos'));

export default () => (
  <ReduxWrapper>
    <RouterWrapper>
      <LayoutWrapper>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/todos" component={Todos} />
            <Route path="/" component={Main} />
          </Switch>
        </Suspense>
      </LayoutWrapper>
    </RouterWrapper>
  </ReduxWrapper>
);
