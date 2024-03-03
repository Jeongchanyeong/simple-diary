import React from 'react';
import styled from 'styled-components';
import DiaryEditor from '../components/DiaryEditor';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;

  width: 60vw;
  height: 100vh;
`;
const Edit = () => {
  return (
    <Wrapper>
      <h1>일기 수정 페이지 입니다.</h1>
      <DiaryEditor />
    </Wrapper>
  );
};

export default Edit;
