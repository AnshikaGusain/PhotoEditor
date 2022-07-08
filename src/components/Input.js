import React from "react";


const Input=({Change})=>  {

        return (
            <div className="input-group">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile01" accept="image/*" onChange={Change}
                        aria-describedby="inputGroupFileAddon01" />
                        {/* <label className="custom-file-label" htmlFor="inputGroupFile01"><button  type="button" className="btn btn-outline-info">Upload</button></label> */}
                </div>
                <div className="input-group-prepend">
                
                </div>
            </div>
        );
    
}

export default Input;