import styled from 'styled-components';
import DiaryItem from './DiaryItem';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #ffacac;

  width: 50vw;
  height: 600px;
  overflow: scroll;
`;

interface dummyListProps {
  dummyList: { id: number; title: string; content: string; date: any }[];
}
const DiaryList = ({ dummyList }: dummyListProps) => {
  return (
    <Wrapper>
      {dummyList.map((item) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

export default DiaryList;
