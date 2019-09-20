import React from 'react';
import './ProgressBar.js'

class ProgressBar extends React.Component {
  render(){
return (
  <div className="bar">
    <div className={this.props.class} style={{width: `${this.props.width}%`}}></div>
  </div>
)
  }
}

export default ProgressBar