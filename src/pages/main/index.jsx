import React from 'react';

import { Button, Typography } from 'antd';

import { Link } from 'react-router-dom';

import './_main.css';

const { Title, Paragraph } = Typography;

export default () => (
  <div className="main-page">
    <div className="main-page__container">
      <Title level={1} className="main-page__title">
        T O D O S H
      </Title>
      <Paragraph className="main-page__paragraph">
        This app aimed to help you organize and sort some tasks. All data stored in browser.
      </Paragraph>
      <Button className="main-page__button" block type="primary">
        <Link to="/todos">GO TO TODOS</Link>
      </Button>
    </div>
  </div>
);
