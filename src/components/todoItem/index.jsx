import React, { memo } from 'react';
import PropTypes from 'prop-types';

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

TodoContainer.propTypes = {
  todoProps: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    createdDatetime: PropTypes.string,
    updatedDatetime: PropTypes.string,
    finishDatetime: PropTypes.string,
    isComplete: PropTypes.bool,
  }),
};

export default TodoContainer;
