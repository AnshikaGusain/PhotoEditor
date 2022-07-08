
const Item=({name, filter,handleClick})=>{
    if(filter==="true"){
        return (<div className="bg-light" style={{cursor:"pointer", textAlign:"center"}} onClick={handleClick}>{name}</div>)
    }
    return(
        <button className="btn btn-outline-light" onClick={handleClick}>
            {name}
        </button>   
    );
}

export default Item;