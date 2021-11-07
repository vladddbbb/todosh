import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { EditOutlined } from '@ant-design/icons';
import { startEdit } from '@src/store/slices/todo.js';

const EditBtn = ({ id }) => {
  const dispatch = useDispatch();

  const onEditClick = () => {
    dispatch(startEdit(id));
  };

  return <EditOutlined onClick={onEditClick} key="edit" />;
};

EditBtn.propTypes = {
  id: PropTypes.number,
};

export default EditBtn;
