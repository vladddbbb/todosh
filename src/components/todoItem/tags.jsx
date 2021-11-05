import React, { useState, useEffect, useRef } from 'react';

import { Space, Tag, Select } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

const Tags = ({ isEdited }) => {
  const inputRef = useRef(null);

  const options = [
    {
      label: 'Tag 1',
      value: 'tag1',
    },
    {
      label: 'Tag 2',
      value: 'tag2',
    },
    {
      label: 'Tag 3',
      value: 'tag3',
    },
  ];
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showInput = () => setInputVisible(true);
  const handleInputChange = (value) => setInputValue(value);

  const handleInputConfirm = () => {
    if (inputValue.trim() && !tags.includes(inputValue)) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }

    setInputVisible(false);
  };

  return (
    <Space direction="horizontal" wrap>
      {tags.map((tag) => (
        <Tag key={tag} color="blue" className="tags-container__item">
          {tag}
        </Tag>
      ))}
      {isEdited &&
        (inputVisible ? (
          <Select
            ref={inputRef}
            options={options}
            size="small"
            style={{ width: 150 }}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
          />
        ) : (
          <Tag onClick={showInput} className="tags-container__input">
            <PlusOutlined /> Attach New Tag
          </Tag>
        ))}
    </Space>
  );
};

export default Tags;
