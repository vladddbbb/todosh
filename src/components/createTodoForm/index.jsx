import React from 'react';

import { Form, Input, Button, DatePicker } from 'antd';

import { CheckSquareOutlined } from '@ant-design/icons';

import moment from 'moment';

const FormContainer = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const performedValues = {
      ...values,
      deadline: values.deadline.toString(),
    };
    console.log(performedValues);

    form.resetFields();
  };

  const disabledDate = (current) => {
    return current && current < Date.now();
  };

  return (
    <Form
      form={form}
      id="create-todo"
      name="create-todo"
      onFinish={onFinish}
      layout="horizontal"
      size="large"
    >
      <Form.Item name="name">
        <Input placeholder="Please, enter todo name" />
      </Form.Item>
      <Form.Item name="description">
        <Input.TextArea
          showCount
          maxLength={250}
          rows={3}
          placeholder="Please, enter todo description"
        />
      </Form.Item>
      <Form.Item name="deadline">
        <DatePicker
          disabledDate={disabledDate}
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Enter deadline if you want"
          style={{ width: '100%' }}
          showTime={true}
        />
      </Form.Item>
      <Button htmlType="submit" size="large" type="primary" block>
        <CheckSquareOutlined /> Create Todo
      </Button>
    </Form>
  );
};

export default FormContainer;
