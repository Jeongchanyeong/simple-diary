import './App.css';
import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editior';
import List from './components/List';

// Editor input에 값을 적고 +버튼을 눌렀을 때 적은 값이 List 내부 TodoItem으로 남아야함
// List 밑에 차곡차곡 쌓여야함
// 내가 내용으로 적은 값을 List의 searchBar에 쌓여야 함

// 일단 mokData를 만들어서 반영시켜보자
// react Components 활용해서 prop이 잘 넘어가는지, state가 등록이 되고 있는지 확인하며 개발
// 할 수 있다.

//

// Editor에 적은 값이 List에 추가되도록 함
// 상태 변화는 Editor인데 값의 추가는 List에서 되네?
// 최상단 컴포넌트인 App에서 상태변화함수는 Editor에, 값은 List에 보내주기

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(3);

  const onCreate = (content) => {
    // 담고있어야 할 정보
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
