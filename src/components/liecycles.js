import React, { PureComponent } from 'react';
//import { NavLink } from 'ract-router-dom'; 
class Life extends PureComponent{
    state={
        title:'Life Cycle'
    }

    // shouldComponentUpdate( nextProp, nextState){
    //     if(nextState.title === this.state.title) 
    //     {
    //         return false
    //     } 
    //     return true
    //     }

    render(){
        console.log(this.state.title)
        return(
            <div>
                <h3>
                   {this.state.title}
                   <div onClick={
                       ()=>this.setState({
                           title:'Something else'
                       })
                   }>Click to change</div>
                </h3>
            </div>
        )
    }
}
export default Life;