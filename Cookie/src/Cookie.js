import React, { Component } from 'react';
import Koockie from './cookie.jpeg'



class Cookie extends Component {
  constructor() {
    super()
    this.state = {
      clicked : 0
    }
  }

  toggleClicks = () => {
    
      this.setState({
        clicked: this.state.clicked + 1
      })
    
  }

  render() {
    return (
      <div  className="cookie"
            onClick= {this.toggleClicks}>
        <h1>You have eaten this {this.state.clicked}</h1>
        <img className="cookie" src={Koockie} alt=""/>
        
      </div>
    );
  }
}

export default Cookie;