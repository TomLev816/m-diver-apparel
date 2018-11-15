import React from 'react';
import {NavLink} from 'react-router-dom'
// <img src={require('../images/medici_homepage.jpg')} alt=''></img>


const NavBar = (props) => {

  return (
  <div className='nav-container'>
    <div className='on-left'>
        <h1>Muff Diver Apparel</h1>
    </div>
    <div className='on-right'>
      
      <NavLink to="/home" >
        <h1>Home</h1>
      </NavLink>

      <NavLink to="/about">
        <h1>About Us</h1>
      </NavLink>

      <NavLink to="/contact">
        <h1>Contact Us</h1>
      </NavLink>

    </div>
  </div>
  );
}

export default NavBar
