import React from 'react';

const Conditional = () =>{
    const value = true;
    return(
        <div>
            <h1>{value?
            <div>
                the current value is true
            </div>
            :null}</h1>
        </div>
    )
}

export default Conditional