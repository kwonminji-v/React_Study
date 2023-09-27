import './App.css';

function App() {

  let post = '백준 2문제씩 풀기';


  return (
    <div className="App">
      <div className = "black-nav">
        <h4>To-Do 만들어보기</h4>
      </div>
      <div className="list">
        <h4>글 제목</h4>
        <p>작성일자</p>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
