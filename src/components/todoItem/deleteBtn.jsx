import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';

import { startDelete, commitDelete, cancelDelete } from '@src/store/slices/todo';

const { confirm } = Modal;

const DeleteBtn = ({ id }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(startDelete(id));

    confirm({
      title: `Deleting todo`,
      content: `Are you sure to delete this item with id ${id}?`,
      okText: 'Yes',
      onOk() {
        dispatch(commitDelete(id));
      },
      cancelText: 'No',
      onCancel() {
        dispatch(cancelDelete(id));
      },
    });
  };

  return <DeleteOutlined onClick={onClick} />;
};

DeleteBtn.propTypes = {
  id: PropTypes.number,
};

export default DeleteBtn;
