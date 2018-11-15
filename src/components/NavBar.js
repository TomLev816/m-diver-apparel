import React from 'react';
import {NavLink} from 'react-router-dom'
// <img src={require('../images/medici_homepage.jpg')} alt=''></img>


const NavBar = (props) => {

  return (
    <ul class="topnav">
      <li>
        <NavLink to='/' >
          Muff Diver Apparel
        </NavLink>
      </li>
      <li>
        <NavLink to="/home" >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar
