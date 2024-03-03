import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background-color: #c5c5c5;

  width: 80%;
  height: 85vh;

  padding: 10px;
`;
const Div = styled.div`
  border-radius: 20px;
  margin: 20px;
`;

const Title = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 500px;
  height: 30px;
`;
const Content = styled.textarea`
  padding: 5px;

  border-radius: 5px;
  width: 500px;
  height: 600px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    margin-left: 10px;
  }
`;

const DiaryEditor = () => {
  return (
    <Wrapper>
      <Div>
        제목 :
        <br />
        <Title></Title>
      </Div>
      <Div>
        내용 :
        <br />
        <Content></Content>
      </Div>
      <ButtonWrapper>
        <Link to={'/'}>
          <Button onClick={() => {}} buttonType={'save'}>
            {'저장'}
          </Button>
        </Link>
        <Link to={'/detail'}>
          <Button onClick={() => {}} buttonType={'cancle'}>
            {'취소'}
          </Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default DiaryEditor;
