import React, { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Space, Tag, Input } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import { selectTags, selectTagTextMaxSize } from '@src/store/selectors/tagSelectors.js';
import { addTag } from '@src/store/slices/tag.js';
import { addTagFilter, removeTagFilter } from '@src/store/slices/todo.js';
import { selectTagFilter } from '@src/store/selectors/todoSelectors.js';

import './_tagsCloud.css';

const TagsContainer = () => {
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  const tagMaxSize = useSelector(selectTagTextMaxSize);
  const tagFilters = useSelector(selectTagFilter);

  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showInput = () => setInputVisible(true);
  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleInputConfirm = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue && !tags.includes(trimmedValue)) {
      setInputValue('');
      dispatch(addTag(trimmedValue));
    }

    setInputVisible(false);
  };

  const onTagClick = (tagName) => () => {
    if (tagFilters.includes(tagName)) {
      return dispatch(removeTagFilter(tagName));
    }

    return dispatch(addTagFilter(tagName));
  };

  useEffect(() => {
    if (inputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputVisible, inputRef]);

  return (
    <Space className="tags-container" direction="horizontal" wrap align="center">
      {tags.map((tag) => {
        const isSelected = tagFilters.includes(tag);
        return (
          <Tag
            key={tag}
            onClick={onTagClick(tag)}
            color={isSelected ? 'volcano' : 'blue'}
            className="tags-container__item"
          >
            {tag}
          </Tag>
        );
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          maxLength={tagMaxSize}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag onClick={showInput} className="tags-container__input">
          <PlusOutlined /> Create New Tag
        </Tag>
      )}
    </Space>
  );
};

export default TagsContainer;
