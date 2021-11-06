import React from 'react';

import { Row, Col } from 'antd';

import TagsCloud from '@src/components/tagsCloud';
import CreateTodoForm from '@src/components/createTodoForm';

import TodosContainer from './components/todosContainer';
import SortRadios from '@src/components/radios';
import Search from '@src/components/search';

import './_todos.css';

export default () => (
  <>
    <Row gutter={[16, 16]} className="top-row">
      <Col span={24} order="1">
        <CreateTodoForm />
      </Col>
      <Col span={24} order="2">
        <TagsCloud />
      </Col>
      <Col
        xs={{
          span: 24,
          order: 4,
        }}
        md={{
          span: 16,
          order: 3,
        }}
        lg={{
          span: 12,
          order: 3,
        }}
      >
        <SortRadios />
      </Col>
      <Col
        xs={{
          span: 24,
          order: 3,
        }}
        md={{
          span: 8,
          order: 4,
        }}
        lg={{
          span: 12,
          order: 4,
        }}
      >
        <Search />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <TodosContainer />
    </Row>
  </>
);
