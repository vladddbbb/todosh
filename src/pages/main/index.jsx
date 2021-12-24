import React from 'react';

import Button from 'antd/es/button';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { default as AntLink } from 'antd/es/typography/Link';

import { Link } from 'react-router-dom';

import './_main.css';

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
      <Paragraph className="main-page__paragraph">
        Do you want to now how to use Todosh App? Please, see{' '}
        <AntLink>
          <Link to="/help">Help Page</Link>
        </AntLink>{' '}
        for more info!
      </Paragraph>
    </div>
  </div>
);
