import React, { Component } from 'react';
import DisplayProgress from './DisplayProgress.js'
import Slider from  './Slider.js'
import './App.css';

class App extends Component {
  constructor() {
    super ();
    this.state= {
     value : 0,
    }
  }
  setValue = newValue => this.setState({value: newValue})
  
  render() {
    return (
      
      <div>
        <h1>The Progress Bar</h1>
        <DisplayProgress value={this.state.value} />
        <Slider value={this.state.value} setValue={this.setValue.bind(this)} />
      </div>
    )
    
  }

}

export default App;
