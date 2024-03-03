import React from 'react';
import styled from 'styled-components';
import DirayDetail from '../components/DirayDetail';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebebeb;

  width: 60vw;
  height: 100vh;
`;

const Detail = () => {
  return (
    <Wrapper>
      <h1>다이어리 디테일 (내용) 페이지 입니다.</h1>
      <DirayDetail />
    </Wrapper>
  );
};

export default Detail;
