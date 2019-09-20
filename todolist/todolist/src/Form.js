import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userText: ''
    }
  }

  updateText(event) {
    this.setState ({
      userText: event.target.value
    })
  }

  pushTask() {
    this.props.new(this.state.userText)
    this.setState ({
      userText: ""
    })
  }
  render(){
    return(
      <div>
        <input
        value={this.state.useText}
        onChange={this.updateText.bind(this)}
         />
        <button
          onClick={() => this.pushTask()}
        >Submit</button>
      </div>
    )
  }
}

export default Form