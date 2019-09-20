import React, { Component } from 'react';

class Task extends Component {
  constructor(){
    super();
    this.state = {
      index: 'jgjhg'
    }
  }

markAsDone() {
  document.getElementsByClassName(this.props.index).classList.toggle('done')
}

  render(){
    return(
      <div>
        <p className={this.props.index}>task: {this.props.list}</p>
        <label>Done?</label>
        <input
          className="check"
          type="checkbox"
          onClick={this.markAsDone}
        />
      </div>
    )
  }
}

export default Task