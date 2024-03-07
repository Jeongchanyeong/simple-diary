import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const UpdateCheckBox = () => {
    onUpdate(id);
  };

  const DeleteTodo = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem" key={id}>
      <input
        readOnly
        type="checkbox"
        checked={isDone}
        onChange={UpdateCheckBox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={DeleteTodo}>삭제</button>
    </div>
  );
};

export default TodoItem;
