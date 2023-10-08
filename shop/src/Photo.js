function Photo(props) {
    return (
        <>
        <div style={{textAlign:"center",height:"40px",backgroundColor:"skyblue", marginBottom:"35px"}}>메인페이지에 게시된 사진들 보여주는 페이지</div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + 'img/pubao1.jpg'}  width="230px" alt="" style={{border:"1px solid red"}}/>
            </div>
            <div className="col-md-4">
              <h4>사진 제목 : {props.datas[0].title}</h4>
              <p>사진 설명 : {props.datas[0].content }</p>
              <p>촬영 날짜 : {props.datas[0].date}</p>
              <button className="btn btn-danger">댓글 남기기</button> 
            </div>
          </div>
        </div>
        </> 
    )
}

export default Photo;