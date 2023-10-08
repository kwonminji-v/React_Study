import { Nav, Container, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import data from './data'

function App() {

  let [datas, setDatas] = useState(data);



  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🌟 푸바오 🌟</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#photo">사진첩</Nav.Link>
            <Nav.Link href="#board">게시판</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
