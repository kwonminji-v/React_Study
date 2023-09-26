/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let post = '백준 2문제씩 풀기'; //자료 잠깐 저장 시 변수 사용
  let [todo , setTodo] = useState(["리액트 인강 10개 듣기" , "백준 문제 2개씩 풀기","정처기 모의고사 3개 풀어보기"]);

  let [click, setClick] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  const clickUp = () => {
       
       setClick(click + 1);
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>To-Do 만들어보기</h4>
      </div>


      {/* <div className="list">
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
        <h4 onClick={() => setModal(modal == false ? true : false)}>{ todo[2] }</h4>
        <p>작성일자</p>
      </div> */}


          {
            //map() 을 쓰고 나면 그 자리에 [] 배열이 만들어 집니다.
            //return 문안의 div가 array [] 자료 안에 담아주었기 때문에 html이 출력될 수 있습니다.
              todo.map(function(data,i) {
                return (
                  <div className="list" key={i}>
                    <h4 onClick={() => !modal ? setModal(true): setModal(false)}>{todo[i]}</h4>


                    <span className='clickUp' onClick={() => {
                      let copy = [...click];
                      copy[i] = copy[i] + 1;
                      setClick(copy)
                    }}>좋아요 👍</span>{click[i]}

                    <p>{click[2]}</p>



                    <p>작성일자</p>
                </div>
                )
              })
          }


          { modal == true ? <Modal/> : null }

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
      <>
      
     <div className="modal">
         <h5></h5>
         <p>날짜</p>
         <p>상세 내용</p>
     </div>
     </>
    )
 }


 function Act() {
     return(
         <div>
             <p>우웩!!!!!!!!!!!!!!!!!!!!!!11</p>
         </div>
     )
 }


export default App;
