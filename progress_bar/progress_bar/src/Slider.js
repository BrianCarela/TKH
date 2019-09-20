import React from 'react';
import './Slider.js'

class Slider extends React.Component {
  render() {
    return(
      <input type="range" min="0" max="100" value={this.props.state} onChange= "{(e) => this.props.setValue(e.target.value)}"></input>
    )
  }
}

export default Slider