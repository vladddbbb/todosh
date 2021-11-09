import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import '@src/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
