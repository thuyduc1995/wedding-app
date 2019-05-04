import React, { Component } from 'react';
import background from '../../assets/images/background.jpg';
import './background.scss';

export default class Background extends Component {
  render() {
    return (
      <div className="background-container">
        <img className="background-img" src={background} alt='main-background'/>
      </div>
    )
  }
}
