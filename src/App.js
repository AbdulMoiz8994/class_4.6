import React,{useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import CreateCounter from './counterContext.js';
function App() {

// let [count, setCount]=useState(2)
let setCount=useState(1); //This is an array count , setCount
  return (
    <CreateCounter.Provider value={setCount}>
    <div className="App">
        <Parent message="Child" comp="Component"/>         
         </div>
    </CreateCounter.Provider>
  );
}

export default App;
