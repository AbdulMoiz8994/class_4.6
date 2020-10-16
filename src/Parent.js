import React from 'react';
import Child from './Child.js';
const Parent = (props) => {

    return(
 <div>
     <Child message={props.message}/>
 </div>
    );
}
export default Parent;