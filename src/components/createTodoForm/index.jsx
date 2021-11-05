import React from 'react';

import { useDispatch } from 'react-redux';

import { Form, Input, Button, DatePicker } from 'antd';

import { CheckSquareOutlined } from '@ant-design/icons';

import moment from 'moment';

import AddTagsSelect from './addTagsSelect';

import { addTodo } from '@src/store/slices/todo';

const FormContainer = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const performedValues = {
      ...values,
      finishDatetime:
        values.finishDatetime && moment(values.finishDatetime).format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(addTodo(performedValues));
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
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please, enter todo name',
          },
        ]}
      >
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
      <Form.Item name="finishDatetime">
        <DatePicker
          disabledDate={disabledDate}
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Enter deadline if you want"
          style={{ width: '100%' }}
          showTime={true}
        />
      </Form.Item>
      <Form.Item name="tags">
        <AddTagsSelect placeholder="Add tags to the todo" style={{ width: '100%' }} />
      </Form.Item>
      <Button htmlType="submit" size="large" type="primary" block>
        <CheckSquareOutlined /> Create Todo
      </Button>
    </Form>
  );
};

export default FormContainer;
