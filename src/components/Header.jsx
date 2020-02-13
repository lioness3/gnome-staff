import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.png';




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
  return (
    <div style={nav_bar}>
    <img style={headerLogo}  src={logo}></img>
    <span style={about}>About the Gnome family</span>
    </div>
  );
}

export default Header;
