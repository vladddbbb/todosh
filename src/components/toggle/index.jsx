import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { toggleIsOnlyUnfinished } from '@src/store/slices/todo';
import { selectIsOnlyUnfinished } from '@src/store/selectors/todoSelectors';

import { Space, Switch, Typography } from 'antd';

const { Text } = Typography;

const FinishedToggleContainer = () => {
  const dispatch = useDispatch();
  const isOnlyUnfinished = useSelector(selectIsOnlyUnfinished);

  const onToggleChange = () => {
    dispatch(toggleIsOnlyUnfinished());
  };

  return (
    <Toggle value={isOnlyUnfinished} onChange={onToggleChange} title="Show only unfinished tasks" />
  );
};

const Toggle = ({ value, onChange, title }) => (
  <Space>
    <Switch checked={value} onChange={onChange} title={title} />
    {title && <Text>{title}</Text>}
  </Space>
);

Toggle.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default FinishedToggleContainer;
