
//Server 작성
const express = require('express'); //require 파일을 불러오는 방법
const cors = require('cors');
const app = express();
const server = require('http').createServer(app); //서버 생성 시 꼭 필요한 메서드

//CORS 사용
app.use(cors());

//api로 요청한 경우 hello 메세지를 보내는 콜백 함수를 넣기
app.get('/api', (req,res) => {
    res.send({message:'hello'});
})

//서버의 작동 여부 확인하기
server.listen(8080, () => {
    console.log('서버 8080 port에서 실행 ok')
})
