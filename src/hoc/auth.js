import React from 'react';

const Auth = (props)=>{
    const pass = 'kunal'
    return(
        pass==='kunadl'?props.children:<h3>You are not authorized</h3>
    )    
}

export default Auth;