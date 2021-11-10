import React from 'react';

import { Spin } from 'antd';

import './_loading.css';

const LoadingSpin = () => (
  <div className="loading-container">
    <Spin />
  </div>
);
export default LoadingSpin;
