import React, { useState } from 'react';
import Todo from './Todo';

const Edit = ({ editTask, todo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, todo.id);
    // ▲ value값을 상위 컴포넌트로 보내줄 함수 지정 구간, 위에서 프롭스로 지정>({createTodo})<하여 상위 컴포넌트에서 선언해줌
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none 
          bg-orange-50 p-4 w-[80%] text-orange-900 rounded text-sm"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="outline-none bg-green-800
        p-4 rounded text-orange-50 w-[20%]"
        >
          edit
        </button>
      </form>
    </div>
  );
};

export default Edit;
