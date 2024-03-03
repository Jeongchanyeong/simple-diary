import React from 'react';
import styled from 'styled-components';
import DiaryEditor from '../components/DiaryEditor';
// DiaryList에서 추가 버튼을 누르면 생성하는 페이지

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #ebebeb;

  width: 60vw;
  height: 100vh;
`;

const New = () => {
  return (
    <Wrapper>
      <h1>생성 페이지 입니다.</h1>
      <DiaryEditor />
    </Wrapper>
  );
};

export default New;
