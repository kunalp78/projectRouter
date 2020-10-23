import React from 'react';

const Card = (props)=>{

    const style={
        backgorund:'lightgrey'
    }

    return(
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Card;