import { useState } from "react";

const MidDiv=(props)=>{
    const [inp, setInp]=useState("");
    const onChangeMethod=(e)=>{setInp(e.target.value);}
    const onSub=(e)=>{
        e.preventDefault();
        props.fun(inp); 
    }
    return(
        <div className="mid">
            <form onSubmit={onSub}>
                <input type="text" placeholder="Search News" onChange={onChangeMethod}></input>
            </form>
        </div>
    );
}
export default MidDiv;