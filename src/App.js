import logo from './logo.svg';
import './App.css';

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
  return (
    <div className="App">
   <button onClick={createSet}>clcick</button>
    </div>
  );
}

export default App;
