import { Nav, Container, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import data from './data'
import { Routes, Route, Link, useNavigate } from "react-router-dom" 
import Photo from "./Photo"

function App() {

  let [datas, setDatas] = useState(data);
  let navigator = useNavigate();



  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={process.env.PUBLIC_URL + 'img/logo.png'} width="7%" style={{borderRadius:"100px", marginRight:"50px"}} alt=""></img>
          <Navbar.Brand href="#home">🌟 푸바오 🌟</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/photo">사진첩</Nav.Link>
            <Nav.Link href="/post">게시판</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
        <>
        <div style={{textAlign:"center",height:"50px",backgroundColor:"yellow"}}>이곳은 메인 페이지</div>
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
                </div>
          </>} />
        <Route path="/photo" element={
          <>
          <Photo datas={datas} />
        </>} />
        <Route path="/post" element={<div>방명록 쓸 곳입니당</div>}></Route>
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
            <Link to='/photo'>사진 보러 가기</Link>
          </div>   
    </>
  )
}

export default App;
