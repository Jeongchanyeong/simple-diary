import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './List.css';

const List = ({ todos }) => {
  const [search, setSearch] = useState('');

  const onChageSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearchFilter = () => {
    // 아무것도 없으면 그냥  todos return
    if (search === '') {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = onSearchFilter();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <input
        value={search}
        onChange={onChageSearch}
        placeholder="검색어 입력"
      />

      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default List;
