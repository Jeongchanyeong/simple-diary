import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { Route, Routes } from 'react-router-dom';

import New from './pages/New';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Detail from './pages/Detail';

const GlobalStyle = createGlobalStyle`
${reset}

body{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a0a0a0;
}
`;

// 상태 관리 초깃값은 DiaryDetail에, DiaryList에 상태변화 값?

function App() {
  const dummyList = [
    {
      id: 1,
      title: '오늘의 일기 1',
      content: '날씨 흐림',
      date: new Date().getTime(),
    },
    {
      id: 2,
      title: '오늘의 일기 2',
      content: '날씨 좋음',
      date: new Date().getTime(),
    },
    {
      id: 3,
      title: '오늘의 일기 3',
      content: '날씨 미치겠음',
      date: new Date().getTime(),
    },
  ];

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home dummyList={dummyList} />} />
        <Route path="detail:id" element={<Detail />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
