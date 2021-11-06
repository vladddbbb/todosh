import React from 'react';

import { Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSortFilter, sortByCreatedDate, sortByUpdatedDate } from '@src/store/slices/todo';
import { selectSortFilter } from '@src/store/selectors/todoSelectors';

export default () => {
  const dispatch = useDispatch();
  const sortFilterValue = useSelector(selectSortFilter);
  const onSortChange = ({ target: { value } }) => {
    dispatch(setSortFilter(value));
    if (value === 'created') {
      dispatch(sortByCreatedDate());
    } else {
      dispatch(sortByUpdatedDate());
    }
  };
  return (
    <>
      <Radio.Group
        value={sortFilterValue}
        onChange={onSortChange}
        className="sort-radios"
        buttonStyle="solid"
      >
        <Radio.Button className="sort-radios__button" value="created">
          Created
        </Radio.Button>
        <Radio.Button className="sort-radios__button" value="updated">
          Updated
        </Radio.Button>
      </Radio.Group>
    </>
  );
};
