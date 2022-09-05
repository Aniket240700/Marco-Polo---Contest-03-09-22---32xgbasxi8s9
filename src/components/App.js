import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
  
  const [button,setButton] = useState('Polo');
  const [heading,setHeading] = useState('Marco');
  
  function toggle(){
  if(button == 'Polo'){
  setButton('Marco');
  }
    else{
    setButton('Polo');
    }
    if(heading == 'Polo'){
    setHeading('Marco');
    }
    else{
    setHeading('Polo');
    }
  }
  
  return (
    <div id="main">
     <h1 id="marco-polo">{heading}</h1>
     <button onClick={toggle} id='marco-polo-toggler'>{button}</button>
    </div>
  )
}


export default App;
