import React, { Component } from 'react';
import logo from '../logo.svg';


export default class Home extends Component {

  render() {
    return (
      <div className='home-main-container'>
        <div className='home-info home-half-container'>
          <div className="home-info-wrapper">
            <h1>Muff Diver Apparel</h1>
            <h3>Visit us to look your best</h3>
            <button className='button'>SHOP NOW</button>
          </div>
        </div>
        <div className='home-logo home-half-container'>
          <img className='back-img' src={require('../images/mda-logo.jpg')} alt=''></img>
        </div>
      </div>
    );
  }

}
