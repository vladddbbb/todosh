import React, { Suspense, lazy, memo } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectIsEditedTodo } from '@src/store/selectors/todoSelectors';

import { Col } from 'antd';

const Todo = lazy(() => import('./todo'));
const EditedTodo = lazy(() => import('./editedTodo'));

import './_todoItem.css';

const TodoContainer = memo((todoProps) => {
  const isEditedTodo = useSelector(selectIsEditedTodo(todoProps.id));

  return (
    <Suspense fallback={null}>
      <Col span={24}>{!isEditedTodo ? <Todo {...todoProps} /> : <EditedTodo {...todoProps} />}</Col>
    </Suspense>
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
