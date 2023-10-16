import { Nav, Container, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import data from './data'
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom" 
import Photo from "./pages/Photo"
import Post from "./pages/Post"
import Card from "./components/Card"

function App() {

  let [datas, setDatas] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={process.env.PUBLIC_URL + 'img/logo.png'} width="7%" style={{borderRadius:"100px", marginRight:"50px"}} alt=""></img>
          <Navbar.Brand href="/">🌟 푸바오 🌟</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/photo')}}>사진첩</Nav.Link>
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
          </>
        } />

        <Route path="/photo/:id" element={ <Photo datas={datas} /> } />

        <Route path="/post" element={<Post/>}>
          <Route path="postlist" element={<div>게시글 목록</div>} />
          <Route path="comment" element={<div>댓글 목록</div>} />
        </Route>


      </Routes>
    </div>
  );
}



export default App;
