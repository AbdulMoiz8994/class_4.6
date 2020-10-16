import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer.js';

const Child2 =() =>{
    let [count, setCount]=useReducer(CounterReducer, 1);

    return(
<div>
    <h2>we are on Child2 of Counter Reducer: {count}</h2>
    <button onClick={() => setCount('INCREMENT')}>Increment Reducer</button>
</div>
    );
}
export default Child2; 