import './App.css';
import { useState, useRef, useReducer } from 'react';
import Header from './components/Header';
import Editor from './components/Editior';
import List from './components/List';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => {
        return item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item;
      });
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  // const [todos, setTodos] = useState([]);

  const idRef = useRef(0);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );

    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== targetId;
    //   })
    // );

    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List onDelete={onDelete} onUpdate={onUpdate} todos={todos} />
    </div>
  );
}

export default App;
