import React, { Component } from 'react';
import './App.css';
import Header from './header';

//this is a class component
//Support state and lifecycle methods. 
class App extends Component {
  render() {
    return (
     <div className="container">
       <Header subtitle="Providing houses all over the world."/>
     </div>
    );
  }
}

export default App;

