import React, { Component } from 'react';
import './navigationBar.scss';

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-content">
          <span className="nav-content-element">HOME</span>
          <span className="nav-content-element">OUR STORY</span>
          <span className="nav-content-element">THE WEDDING</span>
          <span className="nav-content-element">CONTACT</span>
          <span className="nav-content-element">CONFIRMATION</span>
        </div>
      </div>
    )
  }
}
