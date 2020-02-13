import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css'




function Header(){
  const headerLogo = {
    height:'100px',
    width:'100px',

  }
  const nav_bar = {
    backgroundColor: 'rgba(246,246,246,1)',
    width:'100%',
    position:'absolute',
    fontFamily: "'Modak', cursive"


  }

  const about = {
    padding: '50px',
    position:'absolute',
    top:'20px',
    right:'300px',
    letterSpacing: '2px',
    fontSize: '2rem',
    color: 'rgba(92,157,176,1)',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
    }
    const button = {
      padding: '20px',
      borderRadius: '10px',
      width: '100px',
      margin: '0 10px',
      backgroundColor: '#64b36d',
      color: 'white',
      boxShadow: '5px 5px 10px darkgreen',
      border: 'none',
      fontFamily: 'fantasy',
      fontWeight: 'bolder',
      fontSize: '16px'


    }

    const buttonDiv = {
      position:'absolute',
      top:'20px',
      left: '200px',
    }

  return (
    <div style={nav_bar}>
    <img style={headerLogo}  src={logo}></img>
    <div style={buttonDiv}>
    <button style={button}>Features</button>
    <button style={button}>Services</button>
    <button style={button}>Support</button>
    </div>
    <Link to='/gnomes' className='aboutDrop' style={about}>About the Gnome family!</Link>
    </div>
  );
}

export default Header;
