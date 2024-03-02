// Home에 DiaryItem 클릭 시 DiaryEdtail이 보이도록
// 일기가 없습니다.

import styled from 'styled-components';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

// onCreate 작성이네?
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #ebebeb;

  width: 60vw;
  height: 100vh;
`;
interface dummyListProps {
  dummyList: { id: number; title: string; content: string; date: any }[];
}

const Home = ({ dummyList }: dummyListProps) => {
  return (
    <Wrapper>
      <h1>일기 목록</h1>

      <DiaryList dummyList={dummyList} />
      <Button buttonType={'add'} onClick={() => {}}>
        {'일기 작성'}
      </Button>
    </Wrapper>
  );
};

export default Home;
