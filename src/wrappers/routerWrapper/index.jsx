import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '@src/store';

export default ({ children }) => <ConnectedRouter history={history}>{children}</ConnectedRouter>;
