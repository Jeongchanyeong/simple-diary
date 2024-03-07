import React, { useRef, useState } from 'react';
import './Editor.css';
const Editior = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef();
  // 1. 아무것도 적혀있지 않을 때 전송 불가 + 없으면 focus  ok
  // 2. 제출시 적은 값을 비워줌  ok
  // 3. enter키만 눌렀을 때 제출됨

  // input에 적은 값은 버튼 클릭 시 todos 생성
  // input value값 onChange, 버튼 onClick

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();

      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className="Editor">
      <input
        onKeyDown={keyDown}
        ref={contentRef}
        value={content}
        onChange={onChange}
        placeholder="오늘 할 일 적기"
      />

      <button onClick={onSubmit}>+</button>
    </div>
  );
};

export default Editior;
