import './App.css';
import React,{ useState } from 'react';
import Boton from './components/Boton';
import Screen from './components/Screen';
import { sounds2 } from './valors/sounds';

function App() {
  const [audio,setAudio]=useState(false);
  const [display,setDisplay]=useState("");
  
  const handleClick=()=>{
    setAudio(!audio)
  }

  const handleDisplay=(d)=>{
    setDisplay( d )
  }

  return (
    <div className="App">
      <Screen print={display}/> 
      <div className="contenedor">
        <div className="fila">
          <Boton 
            letter={sounds2[0].letter}
            link={sounds2[0].url}
            display={handleDisplay}
            name={sounds2[0].name} >
            Q
          </Boton>
          <Boton 
            letter={sounds2[1].letter}
            link={sounds2[1].url}
            display={handleDisplay}
            name={sounds2[1].name} >
            W
          </Boton>
          <Boton 
            letter={sounds2[2].letter}
            link={sounds2[2].url}
            display={handleDisplay}
            name={sounds2[2].name} >
            E
          </Boton>
        </div>
        <div className="fila">
          <Boton 
            letter={sounds2[3].letter}
            link={sounds2[3].url}
            display={handleDisplay}
            name={sounds2[3].name} >
           A 
          </Boton>
          <Boton 
            letter={sounds2[4].letter}
            link={sounds2[4].url}
            display={handleDisplay}
            name={sounds2[4].name} >
            S
          </Boton>
          <Boton 
            letter={sounds2[5].letter}
            link={sounds2[5].url}
            display={handleDisplay}
            name={sounds2[5].name} >
            D
          </Boton>
        </div>
        <div className="fila">
          <Boton 
            letter={sounds2[6].letter}
            link={sounds2[6].url}
            display={handleDisplay}
            name={sounds2[6].name} >
            Z
          </Boton>
          <Boton 
            letter={sounds2[7].letter}
            link={sounds2[7].url}
            display={handleDisplay}
            name={sounds2[7].name} >
            X
          </Boton>
          <Boton 
            letter={sounds2[8].letter}
            link={sounds2[8].url}
            display={handleDisplay}
            name={sounds2[8].name} >
            C
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
