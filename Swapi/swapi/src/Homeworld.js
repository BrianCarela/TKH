import React, { Component } from 'react'
import axios from '../node_modules/axios'
class Homeworld extends Component {
constructor() {
  super();
  this.state = {
    home: null
  }
}

componentDidMount() {
 
  axios.get(this.props.url)
  .then(response => {
    this.setState({
      home: response.data.name
    })
  })
  .catch(error => console.log(error))
}

  render() {
    console.log(this.state.home)
    return (
      <div>
        <p>and I was born in {this.state.home}</p>
      </div>
    )
  }
}

export default Homeworld;