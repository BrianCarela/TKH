import React from 'react';

import ViewingWindow from './components/ViewingWindow';


import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      wineList: []
    }
  }
  componentDidMount() {
    axios.get('http://myapi-profstream.herokuapp.com/api/b22b84/wines')
    .then(response => {
      this.setState({
        wineList: response.data
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    console.log(this.state.wineList)
    return (
      <div className="App">
      <header className="App-header">
      <ViewingWindow />
      
      </header>
        
       
      </div>
    );
  }
  }


export default App;
