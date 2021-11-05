import React from 'react';

import { useSelector } from 'react-redux';

import { Select } from 'antd';

import { selectTagsForSelect } from '@src/store/selectors/tagSelectors';

const AddTagsSelect = React.forwardRef((props, selectRef) => {
  const tags = useSelector(selectTagsForSelect);

  return <Select ref={selectRef} options={tags} mode="multiple" {...props} />;
});

export default AddTagsSelect;
