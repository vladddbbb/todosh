import React, { useState, useEffect, useRef } from 'react';

import { Space, Tag, Input } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import './_tagsCloud.css';

const TagsContainer = () => {
  const inputRef = useRef(null);

  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showInput = () => setInputVisible(true);
  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleInputConfirm = () => {
    if (inputValue.trim() && !tags.includes(inputValue)) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
      setInputVisible(false);
    }
  };

  useEffect(() => {
    if (inputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputVisible, inputRef]);

  return (
    <Space className="tags-container" direction="horizontal" wrap align="center">
      {tags.map((tag) => (
        <Tag key={tag} color="blue" className="tags-container__item">
          {tag}
        </Tag>
      ))}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
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
