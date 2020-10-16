import React,{useContext} from 'react';
import CreateCounter from './counterContext.js';
const Child = (props) =>{
let counterValue=useContext(CreateCounter);
    return(
      <div>
          <h1>Hello we are on {props.message} </h1>
    <h2>We are doing Context api: {counterValue[0]}</h2>
    <button onClick={() => counterValue[1](++counterValue[0])}>Increment Value</button>
      </div>
    );
}
export default Child;