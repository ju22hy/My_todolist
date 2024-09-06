import React, { useState } from 'react';

const Form = ({ createTodo }) => {
  const [value, setValue] = useState(''); //const [초기값, 변경하면 초기값이 업데이트 됨(함수 실행하거나 매서드 실행 시 사용하면 됨)]

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    createTodo(value);
    // ▲ value값을 상위 컴포넌트로 보내줄 함수 지정 구간, 위에서 프롭스로 지정>({createTodo})<하여 상위 컴포넌트에서 선언해줌
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ▲ input의 onChange 이벤트에 의해 출력된 결과물을 보여줌 */}
        <input
          type="text"
          placeholder="일정을 입력하세요."
          className="outline-none 
          bg-orange-50 p-4 w-[80%] text-orange-900 rounded text-sm"
          onChange={(e) => setValue(e.target.value)} // input 값이 변경될 때마다 값을 저장
          value={value}
          ref={(input) => input && input.focus()}
        />
        {/* {console.log(value)} */}
        <button
          className="outline-none bg-green-800
        p-4 rounded text-orange-50 w-[20%]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
