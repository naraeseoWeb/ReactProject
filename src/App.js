import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setmodal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState(' ');

  return (
    <div className="App">
      <div className='black-nav'>
        <div>ReactBlog</div>
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{ setmodal(!modal); setTitle(i); }}>
                { 글제목[i] }
                <span onClick={(e)=>{ 
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i]= copy[i] + 1;
                  따봉변경(copy);
                  }}>👍
                </span>
                  { 따봉[i] } javasc
              </h4>
              <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <input onChange={(e)=>{ 입력값변경(e.target.value); console.log(입력값) }}></input>

      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} title={title}
        /> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{background:props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
