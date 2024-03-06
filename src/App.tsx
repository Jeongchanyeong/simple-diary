import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}


`;

// 상태 관리 초깃값은 DiaryDetail에, DiaryList에 상태변화 값?

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
