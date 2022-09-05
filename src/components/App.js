import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
  
  const [button,setButton] = useState('polo');
  const [heading,setHeading] = useState('marco');
  
  function toggle(){
  if(button == 'polo'){
  setButton('marco');
  }
    else{
    setButton('polo');
    }
    if(heading == 'polo'){
    setHeading('marco');
    }
    else{
    setHeading('polo');
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
