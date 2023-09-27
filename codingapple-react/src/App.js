import { useState } from 'react';
import './App.css';

function App() {

  let post = '백준 2문제씩 풀기'; //자료 잠깐 저장 시 변수 사용
  let [todo , setTodo] = useState("리액트 인강 10개 듣기" , "백준 문제 2개씩 풀기");

  let num = [1,2];
 
  return (
    <div className="App">
      <div className = "black-nav">
        <h4>To-Do 만들어보기</h4>
      </div>
      <div className="list">
        <h4>{todo}</h4>
        <p>작성일자</p>
      </div>
    </div>
  );
}

export default App;
