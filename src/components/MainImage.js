import React from "react";

    
const MainImage = ({ url,style }) => {
    return (
        <div style={{display:"inline-block"}}>
            <img src={url} alt="image" style={{display:"block", maxWidth:"500px", maxHeight:"500px", width:"auto", height:"auto"}}/>
        </div>
    );
}

export default MainImage;