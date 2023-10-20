/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  let [todo , setTodo] = useState(["리액트 인강 10개 듣기" , "백준 문제 2개씩 풀기","정처기 모의고사 3개 풀어보기"]);
  let [title, setTitle] = useState(0);
  let [click, setClick] = useState([0,0,0,0,0,0,0,0]);
  console.log(click)
  let [modal, setModal] = useState(false);
  let [inputData , setInputData] = useState("");

  let month = new Date().getMonth()+1;
  let day = new Date().getDate();
  let today = String(month) + "월" + " " + String(day) + "일";

  const clickUp = () => {
       setClick(click + 1);
  }

  const changeTitle = () => {
    let copy = [...todo];
    copy[0] = "스프링 인강 3개듣기"
    copy[1] = "새싹 문제 3개씩 풀기"
    copy[2] = "SqlD 문제 5개씩 풀기"
    setTodo(copy);
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>To-Do 만들어보기</h4>
      </div>
          {
            //map() 을 쓰고 나면 그 자리에 [] 배열이 만들어 집니다.
            //return 문안의 div가 array [] 자료 안에 담아주었기 때문에 html이 출력될 수 있습니다.
              todo.map(function(data,i) {
                return (
                  <div className="list" key={i}>
                    <h4 onClick={() => {!modal ? setModal(true): setModal(false); setTitle(i);}}>{todo[i]}
                    <span className='clickUp' onClick={(e) => {
                      e.stopPropagation();
                      let copy = [...click];
                      copy[i] = copy[i] + 1;
                      setClick(copy)
                    }}> 좋아요 👍</span>{click[i]}
                    </h4>
                    <p>작성일자 {today}</p>
                    <button onClick={(e) => {
                      let copy = [...todo]
                      console.log(e)
                      copy.splice(i,1);
                      setTodo(copy)}}>글 삭제하기</button>
                    <p></p>
                </div>
                )
              })
          }

          <input type="text" onChange={(e) => { 
            setInputData(e.target.value); 
          }}  />

          <button onClick={(e) => {
            if (inputData == "") {
                e.preventDefault();
            } else {
            let copy = [...todo];
            copy.unshift(inputData);
            setTodo(copy);
            } }
          }
            >작성 글 추가하기
            </button>


          { 
          modal == true ? 
          <Modal 
          changeTitle={changeTitle}
          title={title}
          today={today}
          setTodo={setTodo} 
          todo={todo} /> : null 
          }

    </div>
  );
}

function Modal(props) {
    return (
      <>
     <div className="modal">
         <h5>해야 할 일 : {props.todo[props.title]}</h5>
         <p>날짜 : {props.today}</p>
         {console.log(props)}
         <p>상세 내용</p>
         <button onClick={props.changeTitle}>글 제목 변경 버튼</button>
     </div>
     </>
    )
 }

export default App;



//state변경함수는 늦게 처리 (비동기처리)


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