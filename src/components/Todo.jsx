import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { TbEdit } from 'react-icons/tb';

const Todo = ({ todo, deleteTodo, editTodo, isComplete }) => {
  // console.log(todo);

  return (
    <div
      className="bg-orange-200 p-4
    flex justify-between items-center
     text-orange-900 rounded h-20"
    >
      <button onClick={() => isComplete(todo.id)}>완료</button>
      <div style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        <p className="text-lg font-semibold">
          {todo.text}
          {/* Form에서 전달된 데이터가 TodoList로 가서 배열의 객체 데이터를 하나씩 뽑아냈는데 그 중에 text 데이터만 쓰겠다 */}
        </p>
      </div>
      <div className="flex items-center gap-6 ">
        <TbEdit
          className="text-green-800 text-3xl"
          onClick={() => editTodo(todo.id)}
        />
        <TiDeleteOutline
          className="text-rose-600 text-3xl mr-1"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
