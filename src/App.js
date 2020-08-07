import React, { Component } from 'react';
import {  Link,BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Remark from './screen2';
import Screen1 from './Screen1M';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Homework" exact component={Home}/>
     <Route path="/screen1" component={Screen1}/>
      <Route path="/screen2" component ={Remark}/> 
      </Switch>
    </div>
    </Router>
  );
}
const Home=()=>(
  <div>
    <h1>Home Page</h1>
    <ul>
    <Link to="/screen1"><li>Screen1</li></Link>
    <Link to="/screen2"><li>Screen2</li></Link>
   
    </ul>
   
  </div>
);

export default App;
