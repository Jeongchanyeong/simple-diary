import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './Main';

const GlobalStyle = createGlobalStyle`
${reset}

body{
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #202020;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
