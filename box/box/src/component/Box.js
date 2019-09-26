import React, { Component } from 'react';

class Box extends Component {
  constructor() {
    super( )
      this.state ={
        color: 'blue'
      }
    
  }
// function which will toggle the color
  toggleColor = () =>  {
    if(this.state.color === "blue") {
      this.setState({
        color: 'red'
      })
    }else {
      this.setState({
        color: 'blue'
      })
    }
  }
  render() {
    return (
      <div className={"box " + this.state.color}
          onClick={this.toggleColor}>
      </div>
        
     
    );
  }
}

export default Box;