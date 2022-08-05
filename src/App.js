import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setmodal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  const today = new Date();
  let date = today.toLocaleString();

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
                  { 따봉[i] }
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
              <p>{date}</p>
          </div>
          )
        })
      }

      <input onChange={(e)=>{ 입력값변경( e.target.value); }}/>
      <button onClick={()=>{ 
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
       }}>글 발행</button>

      {
        modal == true ? <Modal color={'skyblue'} 글제목={글제목} title={title}
        /> : null
      }
      <Modal2></Modal2>

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

class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : "kim",
      age : 20
    }
  }
  render(){
    return (
      <div>
        <p>
          안녕 {this.state.age} 
        </p>
        <button onClick={()=>{this.setState({age:21})}}> 
          버튼
        </button>
      </div>

    )
  }

}

export default App;