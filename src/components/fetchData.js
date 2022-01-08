import axios from "axios";
import { useState } from "react";
const FetchAPI=()=>{
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [cont,setCont]=useState("");
    const [url,setUrl]=useState("");
    const fetch=()=>{
        let name="spiderman";
        axios.get("https://newsapi.org/v2/everything?q=" + name+  "&apiKey=e95cb407d5d84bbb865d014c4b251e7a")
        .then(r=>{
            console.log(r.data.totalResults);
            console.log(r.data.status);
            console.log(r.data.articles);
            console.log(r.data.articles[0].title);
            setTitle(r.data.articles[0].title);
            setDesc(r.data.articles[0].description);
            setUrl(r.data.articles[0].url);
            setCont(r.data.articles[0].content);
        })
    }
    return(
        <>
            <button onClick={fetch}>Click</button>
            <h2>{title}</h2>
            <h3>{desc}</h3>
            <h3>{cont}</h3>
            <a href={url}>{url}</a>
        </>
    );
}

export default FetchAPI;