import React, { useContext, useRef, useState } from 'react';
import './Editor.css';
import { TodoDispatchContext } from '../App';

const Editior = () => {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const { onCreate } = useContext(TodoDispatchContext);

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
