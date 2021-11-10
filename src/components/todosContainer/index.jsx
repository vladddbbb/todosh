import React, { Suspense, lazy } from 'react';

import { useSelector } from 'react-redux';

import { Typography, Empty } from 'antd';

import { selectFilteredTodos } from '@src/store/selectors/todoSelectors';
import { selectTagFilter } from '@src/store/selectors/todoSelectors';

import Loading from '@src/components/loading';

const Todo = lazy(() => import('@src/components/todoItem'));

const { Title } = Typography;

const TodosContainer = () => {
  const tagFilters = useSelector(selectTagFilter);
  const todos = useSelector(selectFilteredTodos);

  return (
    <>
      {tagFilters.length ? (
        <Title level={2}>Filtered by tags: {tagFilters.join(', ')}</Title>
      ) : (
        <></>
      )}
      {todos.length ? (
        <Suspense fallback={<Loading />}>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </Suspense>
      ) : (
        <Empty style={{ width: '100%' }} />
      )}
    </>
  );
};

export default TodosContainer;
