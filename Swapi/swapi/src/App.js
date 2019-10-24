import React from 'react';
import './App.css';
//step one:to install while in the terminal use command 'npm install axios'
import axios from '../node_modules/axios'
import HomeWorld from './Homeworld'
class App extends React.Component {
  //step 2: add state to the app leaving it null by default
  constructor() {
    super();
    this.state= {
      people: null,
      
    }
  }
  
  //step 3: 
  componentDidMount() {
    //the .get() is a default function in React which will be claaed before this component gets rendered
    axios.get('https://swapi.co/api/people/7/')
    .then(response => {
      this.setState({
        people: response.data
      })
    })
    .catch(error => console.log(error))
  }

  // creater a function that will change the data of state
  chsngeState(data) {
    this.setState({
      people: data
    })
  }


  render() {
    if(!this.state.people) {
      return <p> Loadin.....</p>
    }
    return (
      <div className="App">
      <header className="App-header">
      <p>Me name is {this.state.people.name}</p>
      <HomeWorld url= {this.state.people.homeworld}/>
      </header>
    
      </div>
    );
  }
 
}

export default App;
