import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './backToTop.scss';

export default class BackToTop extends Component {
  render() {
    return (
      <Link className='back-top-btn' to='home' smooth={true}>
        <i className="fa fa-angle-double-up fa-2x"></i>
      </Link>
    )
  }
}
