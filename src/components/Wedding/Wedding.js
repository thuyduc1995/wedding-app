import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './wedding.scss';

export default class Wedding extends Component {
  render() {
    return (
      <Element className='wedding'>
        <div className='wedding--title'>Our Big Day</div>
        <i className="wedding--icon fa fa-bookmark"></i>
        <div className='wedding--content'>
          <div className='wedding--content_when'>
            <div className='title'>When</div>
            <div className='content'>June 22, 2019, 6:00 PM</div>
          </div>
          <i className="wedding--icon fa fa-heartbeat"></i>
          <div className='wedding--content_where'>
            <div className='title'>Where</div>
            <div className='content'>Tan Son Nhat Pavillon Hall,</div>
            <div className='content'>202 Hoang Van Thu, Phu Nhuan Dist, Ho Chi Minh City</div>
          </div>
          <button className="wedding--button">Send your wishes</button>
        </div>
      </Element>
    )
  }
}
