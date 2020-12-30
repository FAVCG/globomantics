import React, { Component } from 'react';
import './App.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from './search-results';
import HouseDetail from './house';


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
      this.determineUniqueCountries();
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

  determineUniqueCountries = () => {
    const countries = this.allHouses
    ? Array.from(new Set(this.allHouses.map(h => h.country)))
    : [];
    countries.unshift(null);
    this.setState({ countries });
  }

  filterHouses = (country) => {
    this.setState({ activeHouse: null });
    const filteredHouses = this.allHouses.filter((h) => h.country === country);
    this.setState({ filteredHouses });
    this.setState({ country });
  }

  setActiveHouse = (house) => {
    this.setState({ activeHouse: house });
  }

  render() {
    let activeComponent = null;
    if (this.state.country)
      activeComponent = <SearchResults country={this.state.country}
      filteredHouses={this.state.filteredHouses} setActiveHouse={this.setActiveHouse} />;
      if(this.state.activeHouse)
      activeComponent = <HouseDetail house={this.state.activeHouse} />;
      if(!activeComponent)
      activeComponent = <FeaturedHouse house={this.state.featuredHouse} />;
    return (
     <div className="container">
       <Header subtitle="Providing houses all over the world."/>
       <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses} />
       {/* <FeaturedHouse house={this.state.featuredHouse}/> */}
       {activeComponent}
     </div>
    );
  }
}

export default App;




