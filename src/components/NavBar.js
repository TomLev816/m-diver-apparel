import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  function testing () {
    let navWrapper = document.querySelector('.navbar-wrapper-right')
    navWrapper.style.display = navWrapper.style.display === 'flex' ? 'none' : 'flex';
  }

  return (
    <div className="navbar-container">
      <div className="navbar-promo">
        <p className="no-margin text-center">Free Shipping on all orders.</p>
      </div>
      <div className="navbar">
        <div className="navbar-toggle">
          <i onClick={testing} className="fas fa-bars"></i>
        </div>
        <nav className="navbar-wrapper text-center navbar-wrapper-left">
          <div className="nav-link text-large">
            <NavLink to='/' >
              Muff Diver Apparel
            </NavLink>
          </div>
        </nav>
        <nav className="navbar-wrapper navbar-wrapper-right">
          <div className="nav-link">
            <NavLink to="/home" >
              Home
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/about">
              About Us
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/contact">
              Contact Us
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar
