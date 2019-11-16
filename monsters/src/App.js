import React, { Component} from 'react';

import Loading from './components/Loading'

import CardList from './components/card-list/Card-list.component.jsx'

import { SearchBox }  from './components/search-box/search-box.jsx'


import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      timerHandle: ''
    } 
  }
  componentDidMount() {
    setTimeout(() => 
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users})),2000)
  }
  

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter (monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
      return (
        
        <div className="App">
        <h1>Crazy Monsters</h1>
        
       
  
        <SearchBox 
          placeholder='search monsters'
          handleChange={event => this.setState({searchField: event.target.value})}
        />
       
        <CardList monsters= {filteredMonsters}/>
        
      
          
        </div>
      );
    }
    
    
  }


export default App;
