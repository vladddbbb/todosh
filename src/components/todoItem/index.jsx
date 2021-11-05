import React, { memo } from 'react';

import { useSelector } from 'react-redux';
import { selectIsEditedTodo } from '@src/store/selectors/todoSelectors';

import { Col } from 'antd';

import Todo from './todo';
import EditedTodo from './editedTodo';

import './_todoItem.css';

const TodoContainer = memo((todoProps) => {
  const isEditedTodo = useSelector(selectIsEditedTodo(todoProps.id));

  return (
    <Col span={24}>{!isEditedTodo ? <Todo {...todoProps} /> : <EditedTodo {...todoProps} />}</Col>
  );
});

export default TodoContainer;
