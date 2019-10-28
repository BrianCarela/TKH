import React from 'react';

import './App.css';
import Axios from 'axios';

import CannabisList from './components/Cannabislist'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      strains: []
    }
  }

  componentDidMount() {
    Axios.get("https://strainapi.evanbusse.com/nQgAAdh/strains/search/race/Sativa")
.then(response => {
	this.changeState(response.data)
})
.catch(err => {
	console.log(err);
});
  }

  changeState(weed) {
    this.setState({strains: weed})
  }
  render() {
    return (
      <div className="App">
      <CannabisList weed={this.state.strains} />
      </div>
    );
  }

}

export default App;
