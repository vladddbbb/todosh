import React from 'react';

import { Switch, Route } from 'react-router';

import LayoutWrapper from '@src/wrappers/layoutWrapper';
import RouterWrapper from '@src/wrappers/routerWrapper';
import ReduxWrapper from '@src/wrappers/reduxWrapper';

import Main from '@src/pages/main';

export default () => (
  <ReduxWrapper>
    <RouterWrapper>
      <LayoutWrapper>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </LayoutWrapper>
    </RouterWrapper>
  </ReduxWrapper>
);
