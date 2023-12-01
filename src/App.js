import { useState , useEffect } from 'react';
import './App.css';

// const object ={
//   name: "alex",
//   age :40 
// }



  

// function createFromObj(){
// const keys = Object.keys(object)
// }




function App() {
  const [widthh, setWidthh]= useState(0)
  const offsetWidth = document?.getElementById('pix')?.offsetWidth;

  useEffect(() => {
    console.log("offsetWidth",offsetWidth);
    setWidthh(offsetWidth)
    
}, [widthh])
  function InnerWidth(){

  return <div>{widthh}</div>
  }
 

  function createSet(){
    const array = ['a','b', 'c', 'b','a']
    const set = Array.from(new Set(array).values())
  
   console.log(set)
  return <div>{set}</div>
    }

  // useEffect(() => {
 
  // }, [offsetWidth])

  return (
    <div className="App">
    <div id="pix"></div>
    <InnerWidth className="width"/>

   <button onClick={createSet}>{createSet()}</button>
    </div>
  );
}

export default App;
