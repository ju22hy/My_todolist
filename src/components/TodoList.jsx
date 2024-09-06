import React, { useState } from 'react';
import Form from './Form';
import Todo from './Todo';
import Edit from './Edit';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // 한번에 여러가지 데이터를 받을 수 있기 때문에 배열로 받는다 배열로 받지 않으면 데이터를 셀 수 없다는 오류가 뜸

  const createTodo = (a) => {
    // 얘도 데이터를 넣고 계속 상태 변경하기 때문에 useState 사용
    setTodos([
      ...todos,
      {
        text: a,
        id: Math.floor(Math.random() * 10000), // 추가된 각 일정에 고유의 id 부여, 이는 일정의 이름이 같더라도 고유 id 번호가 다르기 때문에 수정 혹은 삭제 기능 사용 시 유효하게 작용한다
        isEdit: false, // 수정 기능 사용 여부 체크 시 필요한 값
        isDone: false,
      },
    ]);
  }; // text: a를 제외한 나머지 : 어딘가의 default값이 아닌 기능 지정 시 필요한 값을 주어 직접 배열을 만든 것

  const deleteTodo = (a) => {
    // console.log(a);
    setTodos(todos.filter((todo) => todo.id !== a));
    // deleteTodo에서 전달받은 id값이 같지 않은 것들만 모아 배열로 재구성
  };

  const editTodo = (a) => {
    // console.log(a);
    setTodos(
      todos.map((todo) =>
        todo.id === a ? { ...todo, isEdit: !todo.isEdit } : todo
      ) //todo객체의 id 변수가 a와 같은가 ? 같을 때 {isEdit의 값 : false => true로 반전} : 같지 않을 경우 원래의 todo 반환
      // editTodo의 인자 a는 Todo.jsx에 있음, editTodo(todo.id) => 따라서 a는 todo의 id값을 가져온 것
    );
  };
  // console.log(todos);

  const editTask = (a, b) => {
    // console.log(a, b); //a : 수정한 todo.text 값, b : 고유 id
    setTodos(
      todos.map((todo) =>
        todo.id === b ? { ...todo, text: a, isEdit: false } : todo
      ) //todo객체의 id 변수가 b와 같은가 ? 같을 때 { text는 a값으로 변경되고, isEdit은 flase값으로 바뀐다 } ; 같지 않을 경우 원래의 todo 반환
      // editTask의 인자 a,b는 Edit.jsx에 있음, editTask(value, todo.id) => 따라서 a는 변경된 input값(todo의 text값("onChange" 사용했기 때문)) b는 todo의 id값
    );
  };

  const isComplete = (a) => {
    // console.log(a);
    setTodos(
      todos.map((todo) =>
        todo.id === a ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="container font-primary">
      <Form createTodo={createTodo} />
      {/* 자바스크립트의 ${}와 같음  */} {/* idx는 인덱스 */}
      {todos.map((todo, idx) =>
        todo.isEdit ? (
          <Edit key={idx} editTask={editTask} todo={todo} />
        ) : (
          <Todo
            key={idx}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            isComplete={isComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
