import React from "react"
import Card from "./Card";
const BottomDiv=(props)=>{
    return(
        <div className="main-frame">
            {props.newslist.map((i)=>
                <Card title={i.title} desc={i.description} link={i.url}></Card>
            )}
        </div>
    );
}
export default BottomDiv;