import React, { Component } from 'react';
import logo from '../logo.svg';


export default class Home extends Component {

  render() {
    return (
      <div className='home-container'>
        <div className='home-half-contianer'>
          <div className="home-left-half">
            <h1>Muff Diver Apperal</h1>
            <br></br>
            <h3>Visit us to look your best</h3>
            <button className='button'>SHOP NOW</button>
          </div>
        </div>
        <div className='home-half-contianer'>
          <img className='back-img' src={require('../images/back-left.png')} alt=''></img>
        </div>
      </div>
    );
  }

}
