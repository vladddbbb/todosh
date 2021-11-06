import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Card, Typography, Checkbox } from 'antd';

import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';

import EditBtn from './editBtn';
import DeleteBtn from './deleteBtn';
import Tags from './tags';

import { toggleComplete, moveUp, moveDown } from '@src/store/slices/todo.js';
import { selectTagsByTodoId } from '@src/store/selectors/tagSelectors';

const { Title, Paragraph } = Typography;

const Todo = ({ id, name, description, finishDatetime, isComplete, order, lastTodoInd }) => {
  const dispatch = useDispatch();
  const isFirstTodo = order === 0;
  const isLastTodo = lastTodoInd === order;
  const attachedTags = useSelector(state => selectTagsByTodoId(state, id));

  const onCompleteChange = () => {
    dispatch(toggleComplete(id));
  };
  const onMoveDownClick = () => {
    dispatch(moveDown(id));
  };
  const onMoveUpClick = () => {
    dispatch(moveUp(id));
  };
  const todoActions = finishDatetime ? [<Paragraph>Deadline: {finishDatetime}</Paragraph>] : [];

  return (
    <Card
      className={isComplete ? 'todo todo_is_completed' : 'todo'}
      bordered
      title={
        <>
          <Title level={3} className="todo-title">
            <Checkbox
              onChange={onCompleteChange}
              checked={isComplete}
              className="todo-title__item"
            />
            <span className="todo-title__item">{name}</span>
            <DownCircleOutlined
              onClick={onMoveDownClick}
              className="todo-title__item todo-title__item_hidden"
            />
            <UpCircleOutlined
              onClick={onMoveUpClick}
              className="todo-title__item todo-title__item_hidden"
            />
          </Title>
          <Tags isEdited={false} attachedTags={attachedTags} />
        </>
      }
      actions={[...todoActions, <EditBtn id={id} key="edit" />, <DeleteBtn id={id} />]}
    >
      <Paragraph>{description || 'No description'}</Paragraph>
    </Card>
  );
};

export default Todo;
