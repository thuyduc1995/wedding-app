import React, { Component } from 'react';
import { Element, animateScroll } from 'react-scroll';
import Home from '../home/Home';
import Story from '../Story/Story';
import Wedding from '../Wedding/Wedding';
import BackToTop from '../BackToTop/BackToTop';
import './mainContent.scss';

export default class MainContent extends Component {
  render() {
    return (
      <div className="main">
        <Home />
        <Story />
        <Wedding />
        <div className='back-to-top'>
          <BackToTop/>
        </div>
      </div>
    )
  }
}
