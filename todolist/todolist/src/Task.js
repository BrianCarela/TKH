import React, { Component } from 'react';

class Task extends Component {
  constructor(){
    super();
    this.state = {
      done: ''
    }
  }

markAsDone = () => {
  if(this.state.done === '') {
    this.setState({
      done: 'checked'
    })
  } else {
    this.setState({
      done: ''
    })
  }
  console.log(this.state.done)
}

  render(){
    return(
      <div>
        <p className={this.state.done}> task= {this.props.list}</p>
        <label>Done?</label>
        <input
          className={this.state.done}
          type="checkbox"
          onClick={this.markAsDone}
        />
      </div>
    )
  }
}

export default Task