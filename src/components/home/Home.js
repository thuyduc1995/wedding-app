import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../MobileNavigation/SideBar';
import './home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false,
    }
  }

  handleShowMenu = () => {
    this.setState((state) => {
      return { isShowMenu: !state.isShowMenu }
    })
  };

  render() {
    const menuIcon = this.state.isShowMenu ? 'fa-times' : 'fa-bars';
    return (
      <Element className="home">
        <Sidebar show={this.state.isShowMenu}/>
        <i
          onClick={this.handleShowMenu}
          className={`home-menu--button fa ${menuIcon}`} />
        <div className="home-content">
          <div className="home-content--title">SHE SAID YES</div>
          <div className="home-content--subtitle">June 22, 2019, 6:00 PM | Ho Chi Minh City</div>
        </div>
        <button className="home-button">RSVP</button>
      </Element>
    )
  }
}
