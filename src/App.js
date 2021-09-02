import React, {useState, useRef} from 'react';
import './App.css';
import Axios from 'axios';
import NameInfo from './components/NameInfo';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const[nameInfo, setNameInfo] = useState([]);
  const nameRef = useRef(null);
  const getNameInfo = () => {
    Axios.get(`https://api.agify.io/?name=${nameRef.current.value}`).then(
      (response) =>{
        if(response.data){ 
          setNameInfo(response.data)
        }
        
      }
      )


  }
  return (
    
    <div className="container bg-light App">
      <div className="container">
      <div className="container">
        <h1>Let's Guess How Old You Are Based On Your Name</h1>
      </div>
      <div className="input-group">
        <input class="form-control" type="text" placeholder="Enter your name" ref={nameRef}></input>
        <button class="btn btn-danger"onClick={getNameInfo}>Go</button>
      </div>
      </div>
      <NameInfo nameInfo={nameInfo}/>
    </div>
  );
}

export default App;
