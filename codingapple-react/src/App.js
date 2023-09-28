/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let post = '백준 2문제씩 풀기'; //자료 잠깐 저장 시 변수 사용
  let [todo , setTodo] = useState(["리액트 인강 10개 듣기" , "백준 문제 2개씩 풀기","정처기 모의고사 3개 풀어보기"]);

  let [click, setClick] = useState(0);

  const clickUp = () => {
       setClick(click + 1);
  }

  /** onClick 안에는 함수 이름이 필요 ↓ 함수 만드는 법*/
  function  함수 () {
        console.log("으아악");
  }


  return (
    <div className="App">
      <div className = "black-nav">
        <h4>To-Do 만들어보기</h4>
      </div>
      <div className="list">
          <button style={{width : "250px", fontSize : "1rem", fontWeight : "bold", marginTop : "10px"}} onClick={() => {

              let arr = [1, 2, 3]; //객체를 참조하고 있는 화살표만 arr에 저장됩니다.



              let copy = [...todo]; // todo 배열을 복사하는 의미라고 생각하면 된다.
              //... 점 3개를 이용하여 배열을 작성하면 copy 변수에 새로이 배열을 저장하기 때문에 참조 주소값을 변경할 수 있습니다.
              copy[0] = "리액트 인강 5개 듣기"
              copy[1] = "백준 문제 1개 풀기"
              copy[2] = "정처기 모의고사 2회 풀기"
              setTodo(copy);
          }}> 글 제목 변경하기 </button>

        <h4>{ todo[0] } <span className="clickUp" onClick= { clickUp }> 좋아요 😊 </span> {click} </h4>
        <p>작성일자</p>
      </div>
      <div className="list">
        <h4>{ todo[1] }</h4>
        <p>작성일자</p>
      </div>
      <div className="list">
        <h4>{ todo[2] }</h4>
        <p>작성일자</p>
      </div>
    </div>
  );
}

export default App;
