import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import './App.css'




function Welcome(){


  const welcomeText = {

    position:'absolute',
    zIndex:'1',
    top:'200px',
    right:'300px',
    letterSpacing: '2px',
    margin:'0px',


    fontFamily: "'Modak', cursive",

  }
  const welcomeTo = {
    fontSize: '4rem',
    color: 'rgba(227, 252, 252, 0)',
    webkitTextStroke: '1px white'


  }
  const gnomeLandText = {
    fontSize: '12rem',
    color: 'rgba(227, 252, 252, 0)',
    webkitTextStroke: '1px white',


  }



  return (
    <div style={welcomeText}>
    <h2 style={welcomeTo}>Welcome to</h2>
    <h1 style={gnomeLandText}>Gnome Land</h1>

    </div>
  );
}

export default Welcome;
