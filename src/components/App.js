import React from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import background from './background.jpg';
import Welcome from './Welcome'


function App(){

  const background = {

    height: '100vh',
    width: '100wh'
  }
  return (
    <div >
    <Header/>
    <img style={background}  src='https://cdn.wallpapersafari.com/93/58/ySgPwF.jpg'></img>
    <Welcome/>
    </div>
  );
}

export default App;
