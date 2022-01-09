import Title from "./Card-title";
import Desc from "./Card-desc";
import Link from "./Card-link";
const Card=(props)=>{
    return(
        <div className="card">
            <Title content={props.title}></Title>
            <Desc content={props.desc}></Desc>
            <Link content={props.link}></Link>
        </div>
    );
}
export default Card;