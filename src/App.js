import { useState , useEffect } from 'react';
import './App.css';


function App() {
  const [width, setWidth]= useState(0)
  const offsetWidth = document?.getElementById('pix')?.offsetWidth;

  useEffect(() => {
    console.log("offsetWidth",offsetWidth);
    setWidth(offsetWidth)
    
}, [offsetWidth])


  function InnerWidth(){

  return <div>{width}</div>
  }
 

  function createSet(){
    const array = ['a','b', 'c', 'b','a']
    const set = Array.from(new Set(array).values())
  
   console.log(set)
  return <div>{set}</div>
    }

  return (
    <div className="App">
    <div className='pix' id="pix"> 
    <InnerWidth className="width"/>
    </div>
   <button onClick={createSet}>click</button>

    </div>
  );
}

export default App;
