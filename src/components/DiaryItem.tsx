import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;

  border: none;
  border-radius: 8px;

  background-color: #e5e5e5;

  width: 60%;
  height: 50px;

  margin: 5px;
  padding: 20px;

  div {
    margin: 3px;
  }
`;

interface ItemProps {
  id: number;
  title: string;
  content: string;
  date: any;
}

const DiaryItem = ({ id, title, content, date }: ItemProps) => {
  return (
    <Wrapper key={id}>
      <div>{title}</div>
      <div>{content}</div>
      <div>{new Date(date).toLocaleString()}</div>
    </Wrapper>
  );
};

export default DiaryItem;
