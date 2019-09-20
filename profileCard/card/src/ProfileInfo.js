
import React, { Component } from 'react';

export default class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-row">
        <div className="dp" id="dp">
          <div className="dp-arc-outer"></div>
          <div className="dp-arc-inner"></div>
          <img src="https://i.imgur.com/dnQRSAd.jpg" alt="Blksheep" />
        </div>
        <div className="desc" id="desc">
          <h1>{this.props.someData.name}</h1>
          <p>Age: {this.props.someData.age}</p>
          <p>Eye Color: {this.props.someData.eyeColor}</p>
        </div>
      </div>
    );
  }
}

