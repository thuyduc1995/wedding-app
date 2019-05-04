import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { MENU_LIST } from 'constants.js';
import './sidebar.scss';

export default class SideBar extends Component {
  render() {
    const sidebarClass = `home-sidebar ${this.props.show ? 'show' : '' }`;
    return (
      <div className={sidebarClass}>
        <div className='home-sidebar-content'>
          {
            MENU_LIST.map((item) => {
              return (<Link key={item.key} to={item.key} smooth={true}>{item.display}</Link>)
            })
          }
        </div>
      </div>
    )
  }
}
