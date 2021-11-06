import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Typography, Checkbox, Space } from 'antd';

import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';

import EditBtn from './editBtn';
import DeleteBtn from './deleteBtn';
import Tags from './tags';

import { toggleComplete, moveUp, moveDown } from '@src/store/slices/todo.js';
import { selectTagsByTodoId } from '@src/store/selectors/tagSelectors';

const { Title, Paragraph, Text } = Typography;

const Todo = ({ id, name, description, createdDatetime, updatedDatetime, finishDatetime, isComplete, order, lastTodoInd }) => {
  const dispatch = useDispatch();
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

  const getDeadLineType = () => {
    const timeLeft = getTimeLeft();
    if (timeLeft.includes('minute')) {
      return "danger";
    } else if (timeLeft.includes('hour')) {
      return "warning";
    } else {
      return "secondary";
    }
  };
  const getTimeLeft = () => moment().to(moment(finishDatetime, 'YYYY-MM-DD HH:mm:ss'), true);

  const todoActions = finishDatetime
    ? [<Paragraph type={getDeadLineType()}>Time left: {getTimeLeft()}</Paragraph>]
    : [];

  return (
    <Card
      className={isComplete ? 'todo todo_is_completed' : 'todo'}
      bordered
      title={
        <Space direction="vertical" size="small">
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
          {attachedTags?.length > 0 && <Tags isEdited={false} attachedTags={attachedTags} />}
          <Space direction="vertical" size={1}>
            <Text type="secondary">Created date: {createdDatetime}</Text>
            <Text type="secondary">Updated date: {updatedDatetime}</Text>
          </Space>
        </Space>
      }
      actions={[...todoActions, <EditBtn id={id} key="edit" />, <DeleteBtn id={id} />]}
    >
      <Paragraph>{description || 'No description'}</Paragraph>
    </Card>
  );
};

export default Todo;
