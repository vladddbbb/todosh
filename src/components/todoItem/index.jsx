import React, { useState, useEffect } from 'react';

import { Col, Card, Typography } from 'antd';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const TodoContainer = () => {
  const [isEditable, setIsEditable] = useState(false);

  const onEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(isEditable);
  }, [isEditable]);

  return (
    <Col span={24}>
      <Card
        bordered
        title={
          <>
            <Title level={3}>Todo title 1</Title>
          </>
        }
        actions={[
          <Paragraph>2 days remains</Paragraph>,
          <EditOutlined onClick={onEditClick} key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <Paragraph>Todo description</Paragraph>
      </Card>
    </Col>
  );
};

export default TodoContainer;
