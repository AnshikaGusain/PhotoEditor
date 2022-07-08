const Slider=({min,max,value,handleChange})=>{
    return(
        <div >
            <input
                type="range" 
                id="range" 
                style={{width:"90%" ,margin:"10px auto"}}
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                />
        </div>
    );
}

export default Slider;