import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const object ={
  name: "alex",
  age :40 
}


function createSet(){
  const array = ['a','b', 'c', 'b','a']
  const set = Array.from(new Set(array).values())

 console.log(set)

  }
  

function createFromObj(){
const keys = Object.keys(object)
}




function App() {
  function InnerWidth(){
    const offsetWidth = document?.getElementById('pix')?.offsetWidth;
      useEffect(() => {
        console.log("offsetWidth",offsetWidth);
        
  }, [offsetWidth])
  return <div>{offsetWidth}</div>
  }
 

  // useEffect(() => {
 
  // }, [offsetWidth])

  return (
    <div className="App">
    <div id="pix"></div>
    <InnerWidth className="width"/>
   <button onClick={createSet}>clcick</button>
    </div>
  );
}

export default App;
