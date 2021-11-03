import React from 'react';

import { Input, Radio, Row, Col, Card, Typography } from 'antd';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import TagsCloud from '@src/components/tagsCloud';
import CreateTodoForm from '@src/components/createTodoForm';
import Todo from '@src/components/todoItem';

import './_main.css';

const { Title, Paragraph } = Typography;
const { Search } = Input;

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
        <Radio.Group className="sort-radios" buttonStyle="solid">
          <Radio.Button className="sort-radios__button" value="created">
            New
          </Radio.Button>
          <Radio.Button className="sort-radios__button" value="updated">
            Updated
          </Radio.Button>
          <Radio.Button className="sort-radios__button" value="own">
            Own
          </Radio.Button>
        </Radio.Group>
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
        <Search placeholder="Please, input fragment of description" />
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Todo />
      <Todo />
      <Todo />
    </Row>
  </>
);
