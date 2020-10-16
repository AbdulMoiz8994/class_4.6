import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer.js';

const Child2 =() =>{
    let [count, depatch]=useReducer(CounterReducer, 2);

    return(
<div>
    <h2>we are on Child2 of Counter Reducer: {count}</h2>
    <button onClick={() => depatch('INCREMENT')}>Increment Reducer</button>
</div>
    );
}
export default Child2; 