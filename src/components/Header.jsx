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

  }

  const about = {
    padding: '50px',
    position:'absolute',
    top:'20px',
    right:'300px'

  }
  return (
    <div style={nav_bar}>
    <img style={headerLogo}  src={logo}></img>
    <span style={about}>About the Gnome family</span>
    </div>
  );
}

export default Header;
