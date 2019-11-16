import React from 'react';
import { LineScalePulseOut } from 'react-pure-loaders';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

 
  render() {
    return (
      <div>
      
        <LineScalePulseOut
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default Loading;