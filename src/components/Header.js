import React from 'react';
import "../styles/Header.css";
import Nav from '../components/Nav';

function Header () {
    return (
      <div className="header">
     <ul id="dropdown1" className="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li className="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
        <Nav />
      </div>
    )
  }

export default Header;
