/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let [todo , setTodo] = useState(["정처기 모의고사 3개 풀어보기","백준 문제 2개씩 풀기","리액트 인강 10개 듣기"]);

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

              let copy = [...todo]; // todo 배열을 복사하는 의미라고 생각하면 된다.
              //... 점 3개를 이용하여 배열을 작성하면 copy 변수에 새로이 배열을 저장하기 때문에 참조 주소값을 변경할 수 있습니다.
              copy[0] = "정처기 모의고사 2회 풀기"
              copy[1] = "리액트 인강 5개 듣기"
              copy[2] = "백준 문제 1개 풀기"
              setTodo(copy);
          }}> 글 제목 변경하기 </button>

          <button style={{width : "250px", fontSize : "1rem", fontWeight : "bold", marginTop : "10px"}} onClick={() => {
              let copy = [...todo];
              console.log(copy.sort());
              copy.sort()
              setTodo(copy);
          }}>글 제목 순서대로 정렬하기</button>

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

        <Modal></Modal>
    </div>
  );
}

/*
해당 컴포넌트를 사용하고 싶은 위치에서 <함수명></함수명>으로 사용할 수 있습니다.
* function 작명() //컴포넌트 이름은 꼭 영어 대문자로 사용{
*       return (
*       추가 할 html 태그들을 return 문 안에 담습니다.
*   )
* }
* */

 function Modal() {
    return (
     <div className="modal">
         <h5>제목</h5>
         <p>날짜</p>
         <p>상세 내용</p>
     </div>
    )
 }

export default App;
