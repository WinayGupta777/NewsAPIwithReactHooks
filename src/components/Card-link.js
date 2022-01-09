const Link=(props)=>{
    return(
        <div className="link">
            <a href={props.content}>{props.content}</a>
        </div>
    );
}
export default Link;