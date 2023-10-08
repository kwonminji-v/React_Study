import { Nav, Container, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import data from './data'
import { Routes, Route, Link } from "react-router-dom" 

function App() {

  let [datas, setDatas] = useState(data);



  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🌟 푸바오 🌟</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/photo">사진첩</Nav.Link>
            <Nav.Link href="#board">게시판</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div style={{textAlign:"center",height:"50px",backgroundColor:"yellow"}}>이곳은 메인 페이지
        <div className="main-bg"></div>
        <div className="container">
        <div className="row">
          {
            datas.map((data,i) => {
              return (
                <Card datas={datas} i={i}/>
              )
            })
          }
        </div>
      </div></div>} />
        <Route path="/photo" element={<div style={{textAlign:"center",height:"40px",backgroundColor:"skyblue"}}>메인페이지에 게시된 사진들 보여주는 페이지</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <>
       <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + 'img/pubao'+(props.i+1)+'.jpg'}  width="230px" alt="" style={{border:"1px solid red"}}/>
            <h4>사진 제목 : {props.datas[props.i].title}</h4>
            <p>사진 내용 : {props.datas[props.i].content}</p>
            <p>날짜 : {props.datas[props.i].date}</p>
          </div>   
    </>
  )
}

export default App;
