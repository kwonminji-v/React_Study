import { Link } from "react-router-dom"

function Card(props) {

    return (
      <>
         <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + 'img/pubao'+(props.i+1)+'.jpg'}  width="230px" alt="" style={{border:"1px solid red"}}/>
              <h4>사진 제목 : {props.datas[props.i].title}</h4>
              <p>사진 내용 : {props.datas[props.i].content}</p>
              <p>날짜 : {props.datas[props.i].date}</p>
              <Link to="/photo">사진 보러 가기</Link>
            </div>   
      </>
    )
  }

export default Card;