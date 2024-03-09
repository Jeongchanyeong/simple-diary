import React, { useContext, useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import './List.css';
import { TodoStateContext } from '../App';

const List = () => {
  const todos = useContext(TodoStateContext);
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

  const { currentTodo, doneTodo, notDoneTodo } = useMemo(() => {
    const currentTodo = todos.length;
    const doneTodo = todos.filter((todo) => todo.isDone).length;
    const notDoneTodo = currentTodo - doneTodo;

    return {
      currentTodo,
      doneTodo,
      notDoneTodo,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List</h4>

      <div>
        <div>total: {currentTodo}</div>
        <div>완료한 Todo: {doneTodo}</div>
        <div>미완료한 Todo: {notDoneTodo}</div>
      </div>
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
