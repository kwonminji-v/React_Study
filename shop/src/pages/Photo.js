import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Photo(props) {

  //실행시점이 약간 다른데 useEffect 내부 코드는 html 렌더링 이후에 동작합니다.
  useEffect(() => {
    //여기에 적힌 코드는 Photo 컴포넌트가 처음 띄워질 때와 업데이트 될때 실행이 됩니다.
    //React 상에서는 useEffect내부 코드는 2번 동작합니다.
    console.log('안녕')
    for(var i=1; i<1000; i++) {
      console.log(1);
    }
  })


  let [count , setCount] = useState(0);

  const { id } = useParams();

  const photos = props.datas.find((array)=> {return array.id == id})

    return (
        <>
        <div style={{textAlign:"center",height:"40px",backgroundColor:"skyblue", marginBottom:"35px"}}>메인페이지에 게시된 사진들 보여주는 페이지</div>
        <div className="container">
          {count}
          <button onClick={() =>{setCount(count+1)}}>버튼!</button>
          <div className="row">
            <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + '../img/pubao'+(id)+'.jpg'}  width="230px" alt="" style={{border:"1px solid red"}}/>
            </div>
            <div className="col-md-4">
              <h4>사진 제목 : {photos.title}</h4>
              <p>사진 설명 : {photos.content }</p>
              <p>촬영 날짜 : {photos.date}</p>
              <button className="btn btn-danger">댓글 남기기</button> 
            </div>
          </div>
        </div>
        </> 
    )
}

export default Photo;