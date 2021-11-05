import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Form, Card, Input, DatePicker } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

import moment from 'moment';

import Tags from './tags';

import { commitEdit, cancelEdit } from '@src/store/slices/todo';

const EditedTodo = ({ id, name, description, finishDatetime }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onEditClick = () => {
    const values = form.getFieldsValue();
    const performedValues = {
      ...values,
      finishDatetime:
        values.finishDatetime && moment(values.finishDatetime).format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(
      commitEdit({
        id,
        todo: performedValues,
      }),
    );
  };

  const onCancelClick = () => {
    dispatch(cancelEdit());
  };

  const setValues = () => {
    form.setFieldsValue({
      name,
      description,
      finishDatetime: finishDatetime && moment(finishDatetime),
    });
  };

  const disabledDate = (current) => {
    return current && current < Date.now();
  };

  useEffect(() => {
    setValues();
  }, []);

  return (
    <Form size="large" form={form} id="update-todo" name="update-todo">
      <Card
        bordered
        title={
          <>
            <Form.Item
              name="name"
              className="edited-form-item"
              rules={[
                {
                  required: true,
                  message: 'Todo name cannot be empty',
                },
              ]}
            >
              <Input placeholder="Please, update todo name" />
            </Form.Item>
            <Tags isEdited={true} />
          </>
        }
        actions={[
          <Form.Item name="finishDatetime" className="edited-form-item edited-form-item_wrappable">
            <DatePicker
              disabledDate={disabledDate}
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Update deadline"
              style={{ width: '100%' }}
              showTime={true}
            />
          </Form.Item>,
          <EditOutlined key="edit" onClick={onEditClick} />,
          <CloseOutlined key="cancel" onClick={onCancelClick} />,
        ]}
      >
        <Form.Item name="description" className="edited-form-item">
          <Input.TextArea
            showCount
            maxLength={250}
            rows={3}
            placeholder="Please, update description"
          />
        </Form.Item>
      </Card>
    </Form>
  );
};

export default EditedTodo;
