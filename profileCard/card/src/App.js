import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import squad from './Squad';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <ProfileCard list={this.props.squad} />
      </div>
    );
  }
}

App.defaultProps = {
  squad: squad,
};