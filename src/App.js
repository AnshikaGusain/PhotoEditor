import './App.css';
import Navbar from './components/Navbar';
import Input from './components/Input';
import { useState } from 'react';
import MainImage from './components/MainImage';
import add from "./assets/add.png";
import Slider from './components/Slider';
import Item from './components/Item';
import ImageCropper from './components/ImageCropper';


const defaultOptions = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      max: 200,
      min: 0
    },
    unit: "%"
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      max: 200,
      min: 0
    },
    unit: "%"
  }
]

const defaultFilters = [
  {
    name: 'Gray',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

const App = () => {

  const [image, setImage] = useState();
  const [options, setOptions] = useState(defaultOptions);
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = options[selectedIndex];
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const selectedFilter = filters[selectedFilterIndex];
  const [crop, setCrop] = useState("false");
  const [filter, setFilter] = useState("false");

  function handleSliderChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  const handleFilter=({target})=>{
    setFilters(prevOptions => {
      return prevOptions.map((filter, index) => {
        if (index !== selectedFilterIndex) return filter
        return { ...filter, value:target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return { filter: filters.join(' ') }
  }
  function getFilterStyle() {
    const fil = filters.map(filter => {
      return `${filter.property}(${filter.value}${filter.unit})`
    })
    console.log(fil);
    return { filter: fil.join(' ') }
  }

  const handleCrop = () => {
    setCrop("true");
    setFilter("false");
  }


  const loadFile = (event) => {
    let u = (URL.createObjectURL(event.target.files[0]));
    setImage(u);
  };



  
  return (
    <div className="App">
      <Navbar />
      <div style={{display:"inline-block", margin:"20px auto", padding:"5px"}}>

      <Input Change={loadFile} />
      </div>
      <div className='container'>

        {options.map((option, index) => {
          return (
            
            <Item key={index} name={option.name} handleClick={() => {
              setSelectedIndex(index);
              setCrop("false")
              setFilter("false")
            }
            } />
            
          )
        })}
        <button className="btn btn-outline-light" onClick={handleCrop}>
          Crop
        </button>
        <div className="btn-group">
        <button type="button" className="btn btn-light">Filters</button>
        <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        

        <ul className="dropdown-menu">
          {filters.map((filter,index)=>{
            return(
              <li><Item key={index} name={filter.name} filter="true" handleClick={()=>{
                setSelectedFilterIndex(index);
                setFilter("true");
              } }/></li>
            )
          })}
        </ul>
        
      </div>
      </div>

      {!image ?
        <div style={{display:"inline-block", margin:"20px auto", padding:"5px"}}  >
          <img src={add} alt="image" style={{ cursor: "pointer" }} />
        </div>
        :
        (crop === "true") ? (<div><ImageCropper src={image} /></div>) : 
        
        (filter=="true")?
        (<div className='pic' style={getFilterStyle()}>
          <MainImage url={image} />
          <Slider min={selectedFilter.range.min}
            max={selectedFilter.range.max}
            value={selectedFilter.value}
            handleChange={handleFilter} />
          </div>)
        :
        (<div className='pic' style={getImageStyle()}>
          <MainImage url={image} />
          <Slider min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange} />
        </div>)
      }
      

    </div>
  );

}

export default App;
