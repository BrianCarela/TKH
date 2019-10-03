import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import House from './components/House';
import HouseList from './components/HouseList';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireData: data,
      currentHouse: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(fire) {
    this.setState({
      currentHouse: fire,
    });
  }

  render() {
    console.log(this.state.fireData);
    return (
      <div className="App">
        <HouseList
          fireData={this.state.fireData}
          handleSelect={this.handleSelect}
        />
        <House currentHouse={this.state.currentHouse} />
      </div>
    );
  }
}
