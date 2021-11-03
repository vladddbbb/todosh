import React from 'react';
import {useSelector} from 'react-redux';
import {selectFilteredTodos} from '../../store/slices/todo';
import {selectTags} from '../../store/slices/tag';
export default () => {
  const todos = useSelector(state => selectFilteredTodos(state));
  const tags = useSelector(state => selectTags(state));
  return(
    <h1>TODOSH</h1>
  );
}
