import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch,} from 'react-router-dom';
//we also have alternatives such as HashRouter and MemoryRouter

//Components
import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/liecycles';
import Conditional from './components/conditional';

const App = ()=>{
  return(
    <BrowserRouter>
      <div>
      <header>
        
        <NavLink to='/'>Home</NavLink><br/>
        <NavLink to='/posts' >Post</NavLink><br/>
        <NavLink to={{
          pathname:'/profile'
        }} >Profile</NavLink><br/>
        <NavLink to={{
          pathname:'/life'
        }} >Life</NavLink><br/>
        <NavLink to='/conditional' >Conditional</NavLink><br/>
        <hr/>
      </header>
        <Switch>
            
            
            <Route path="/posts/:id/:username" component={PostItem}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/posts" component={Post}/>
            <Route path="/life" component={Life}/>
            <Route path="/conditional" component={Conditional}/>
            <Route path="/" exact component={Home}/>
            <Route render={()=><h1>404</h1> }/>
        </Switch>
        
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)