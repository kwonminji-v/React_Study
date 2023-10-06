import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Image, Container, Nav, Button, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data'

function App() {

  let [photos, setPhotos] = useState(data);
  

  return (
    <div className="App">
      <Navbar style={{height:"80px", border:"1px solid red"}} bg="light" data-bs-theme="black">
        <Container>
          <Navbar.Brand href="#home">
          <Image src={process.env.PUBLIC_URL + '/logo.png'} style={{width:'70px',marginRight:"40px" }} />
          오늘의 일기</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">프로필</Nav.Link>
            <Nav.Link href="#photo">사진첩</Nav.Link>
            <Nav.Link href="#post">방명록 남기기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{display:"flex"}}>    

      {
        photos.map((data,i) => {
          return (
          <div style={{width:"500px", border:"2px solid yellow"}}>
          <Card>
          <Card.Header>최근 업로드한 사진</Card.Header>
          <Card.Body>
            <Card.Title>제목 :  {data.title}</Card.Title>
            <Card.Text>
              내용 : {data.content}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
          </div>
          )
        })
      }
      {/* <div style={{width:"500px", border:"2px solid yellow"}}>
      <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div style={{width:"500px", border:"2px solid blue"}}>
      <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div style={{width:"500px", border:"2px solid black"}}>
      <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div style={{width:"500px", border:"2px solid green"}}>
      <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div> */}
      </div>
    </div>
  );
}

export default App;
