import React from 'react';
import OneComment from './One-comment';

class Comments extends React.Component {
constructor(){
  super();
  this.state={
    newComments: ['working?'],
    input: ''
  }
  //this line makes it so that using the keyword "this" in contexts of handling an input, will refer to the EVENT as "this" and not the current component as "this"
  this.handleInput = this.handleInput.bind(this);
  this.handleClick=this.handleClick.bind(this);
}

handleClick(event){
  event.preventDefault();

  this.setState({
    newComments : this.state.newComments.concat([this.state.input]),
    input: ''
  })
}

handleInput(event) {
  //console.log('what upppppp')
  this.setState({
    input: event.target.value
  })
  console.log('handle')
}

componentDidUpdate(){
console.log('componentDidUpdate -', this.state.input)
}

  render() {
    const comments = this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    var newComments = this.state.newComments.map( (item, index) => <OneComment key={index} comment={item}/>)

    return (
      <div>
        
        
      <form>
      <input 
        placeholder= "Enter comment here"
        onChange={this.handleInput}
        value= {this.state.input}>
      </input>
      <button onClick= {this.handleClick}>PRESS ME</button>
      </form>

      <div className= "wrap">
      {newComments}
      </div>
      <div className= "wrap">
      {comments}
      </div>
        
      </div>
    );
  }
}

export default Comments;
//© 2019 GitHub, Inc.