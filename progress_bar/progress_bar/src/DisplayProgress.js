import React from 'react';
import './DisplayProgress.js';
import ProgressBar from './ProgressBar.js'


class DisplayProgress extends React.Component {
  
  getStatus = currentValue => {
    if(currentValue === 100) {
      return 'Complete!'
    }else {
      return `In progress ${currentValue}`
    }
  }

getStyle = percentage => {
  if(percentage <= 33) {
    return 'low';
  }else if(percentage > 33 && percentage <= 66) {
    return 'medium';
  }else {
    return 'high'
  }
}
render (){
  return (
    <div>
<h3>{ this.getStatus(this.props.value) }</h3>
    <ProgressBar width={this.props.value} class= {this.getStyle(this.props.value)}/>
    </div>
    
    )
}

} 


export default DisplayProgress;