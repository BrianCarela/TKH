  
import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo';

export default class ProfileCard extends Component {
  renderThings(arr) {
    return arr.map(item => <ProfileInfo key={item.id} someData={item} />);
  }
  render() {
    return (
      <div className="id-card-wrapper">
        <div className="id-card">{this.renderThings(this.props.list)}</div>
      </div>
    );
  }
}


Component