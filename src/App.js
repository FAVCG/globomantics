import React, { Component } from 'react';
import './App.css';
import Header from './header';
import FeaturedHouse from './featured-house';


//this is a class component
//Support state and lifecycle methods. 
class App extends Component {
//you can do it this way or the other way. 
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {} 

  componentDidMount() {
    this.fetchHouse();
  }

  fetchHouse = () => {
    fetch('/houses.json')
    .then(rsp => rsp.json())
    .then(allHouses => {
      this.allHouses = allHouses;
      this.determineFeaturedHouse();
    })
  }
 //This picks a random house from the list of houses.
  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      //state is private data for the component.
      //setState triggers re-render
      //everything you put in state should be used in the render method. 
      this.setState({ featuredHouse });
    };
  }
  render() {
    return (
     <div className="container">
       <Header subtitle="Providing houses all over the world."/>
       <FeaturedHouse house={this.state.featuredHouse}/>
     </div>
    );
  }
}

export default App;



