import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { Space, Tag, Select } from 'antd';

import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { selectTagsForSelect } from '@src/store/selectors/tagSelectors';

const Tags = ({ isEdited, attachedTags = [], onTagAttach, onTagDeattach }) => {
  const inputRef = useRef(null);

  const options = useSelector((state) => selectTagsForSelect(state, attachedTags));
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showInput = () => setInputVisible(true);
  const handleInputChange = (value) => setInputValue(value);

  const handleInputConfirm = () => {
    if (inputValue.trim() && !attachedTags.includes(inputValue)) {
      onTagAttach(inputValue);
      setInputValue('');
    }

    setInputVisible(false);
  };

  const handleTagDeattach = (tag) => () => {
    onTagDeattach(tag);
  };

  return (
    <Space direction="horizontal" wrap>
      {attachedTags.map((tag) => (
        <Tag key={tag} color="blue" className="tags-container__item">
          {tag}
          {isEdited && <CloseOutlined onClick={handleTagDeattach(tag)} />}
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

Tags.propTypes = {
  isEdited: PropTypes.bool.isRequired,
  attachedTags: PropTypes.array,
  onTagAttach: PropTypes.func,
  onTagDeattach: PropTypes.func,
};

export default Tags;
