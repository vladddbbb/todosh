import React from 'react';

import { Input, Radio, Row, Col, Tag } from 'antd';

import './_main.css';

const { Search } = Input;

export default () => (
  <>
    <Row gutter={4}>
      <Col span={8}>
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="created">Newly created</Radio.Button>
          <Radio.Button value="updated">Newly updated</Radio.Button>
        </Radio.Group>
      </Col>
      <Col span={16}>
        <Search placeholder="Please, input fragment of description" />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <div className="tags-container">
          <Tag>Tag1</Tag>
          <Tag>Tag2</Tag>
          <Tag>Tag3</Tag>
          <Tag>Tag4</Tag>
          <Tag>Tag5</Tag>
          <Tag>Tag6</Tag>
          <Tag>Tag7</Tag>
          <Tag>Tag8</Tag>
          <Tag>Tag9</Tag>
          <Tag>Tag10</Tag>
          <Tag>Tag2</Tag>
          <Tag>Tag3</Tag>
          <Tag>Tag4</Tag>
          <Tag>Tag5</Tag>
          <Tag>Tag6</Tag>
          <Tag>Tag7</Tag>
          <Tag>Tag8</Tag>
        </div>
      </Col>
    </Row>
  </>
);
