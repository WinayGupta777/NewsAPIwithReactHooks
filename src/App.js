import axios from "axios";
import TopDiv from "./components/Top";
import MidDiv from "./components/Middle";
import BottomDiv from "./components/Bottom";
import { useState } from 'react';

const App=()=>{
  const [list,setList]=useState([]);

  const DOMAIN = process.env.REACT_APP_DOMAIN || "https://newsapi.org";
  console.log(DOMAIN);
  const fetchNews=(name)=>{
    axios.get(`${DOMAIN}/v2/everything?q=` + name+  "&apiKey=e95cb407d5d84bbb865d014c4b251e7a")
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