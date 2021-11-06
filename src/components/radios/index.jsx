import React from 'react';

import { Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { setSortFilter, sortByCreatedDate, sortByUpdatedDate } from '@src/store/slices/todo';

export default () => {
  const dispatch = useDispatch();
  const onSortChange = ({ target: {value} }) => {
    dispatch(setSortFilter(value));
    if (value === 'created') {
      dispatch(sortByCreatedDate());
    } else {
      dispatch(sortByUpdatedDate());
    }
  }
  return (
    <>
      <Radio.Group onChange={onSortChange} className='sort-radios' buttonStyle='solid'>
        <Radio.Button className='sort-radios__button' value='created'>
          Created
        </Radio.Button>
        <Radio.Button className='sort-radios__button' value='updated'>
          Updated
        </Radio.Button>
      </Radio.Group>
    </>
  );
}
