import React from 'react';

import { useDispatch } from 'react-redux';

import { setSearchText } from '@src/store/slices/todo';

import { Input } from 'antd';

const { Search } = Input;

const SearchContainer = () => {
  const dispatch = useDispatch();

  const onSearch = (value) => {
    dispatch(setSearchText(value));
  };

  return (
    <Search
      allowClear
      onSearch={onSearch}
      placeholder="Please, input fragment of description or name"
    />
  );
};

export default SearchContainer;
