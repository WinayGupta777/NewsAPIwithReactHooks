import styles from './components/top.css';
import axios from "axios";
import TopDiv from "./components/Top";
import MidDiv from "./components/Middle";
import BottomDiv from "./components/Bottom";
import { useState } from 'react';
let list=[
  {
    title:"Hello",
    desc: "Description",
    link:"https://"
  },
  {
    title:"Hello2",
    desc: "Description2",
    link:"https://2"
  },
  {
    title:"Hello3",
    desc: "Description3",
    link:"https://3"
  },
  {
    title:"Hello2",
    desc: "Description2",
    link:"https://2"
  }
]
const App=()=>{
  const [list,setList]=useState([]);
  const fetchNews=(name)=>{
    axios.get("https://newsapi.org/v2/everything?q=" + name+  "&apiKey=********************************")
    .then(r=>{
      setList(r.data.articles);
    })
  }
  return(
    <div>
      <TopDiv></TopDiv>
      <MidDiv fun={fetchNews}></MidDiv>
      <BottomDiv newslist={list}></BottomDiv>
    </div>
  )
}

export default App;