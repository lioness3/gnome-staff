import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.png';
import './Header.css'




function Gnomes(){
  const allGnomes = {

    height:'100vh',
    width:"800px",

    overflowX:'hidden',
    position:'absolute',
    zIndex:'5',
    top:'105px',
    right:'200px',
    opacity: '.84'

  }



  const gnome1 = {
 backgroundColor:'#4FD8D5',
 height:'300px',
 display:'grid',
 gridTemplateColumns:'1fr 1fr'
  }
  const gnome2 = {
backgroundColor:'#7FE2F4',
height:'300px',
display:'grid',
gridTemplateColumns:'1fr 1fr'
  }
  const gnome3 = {
backgroundColor:'#1E61A2',
height:'300px',
display:'grid',
gridTemplateColumns:'1fr 1fr'
  }
  const gnome4 = {
backgroundColor:'#DF4CAF',
height:'300px',
display:'grid',
gridTemplateColumns:'1fr 1fr'
  }
  const gnome5 = {
backgroundColor:'#EA2474',
height:'300px',
display:'grid',
gridTemplateColumns:'1fr 1fr'
  }
  const gnome6 = {
backgroundColor:'#4FD8D5',
height:'300px',
display:'grid',
gridTemplateColumns:'1fr 1fr'
  }
  const gnomeImage = {
height: '300px',

  }

  return (
    <div className = 'gnomeDiv' style={allGnomes}>
      <div style={gnome1}>
        <img style={gnomeImage} src="https://66.media.tumblr.com/c22b57f63e85e98596f310a7a2dedc5f/tumblr_ovz3kiD7I71ui2tu8o1_1280.jpg" alt=""></img>
        <p>Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Enim diam vulputate ut pharetra sit amet aliquam id diam. Fringilla phasellus faucibus scelerisque eleifend.</p>
      </div>
      <div className = 'gnomeDiv' style={gnome2}>
        <img style={gnomeImage} src="https://www.epilogue.net/sites/default/files/imagecache/gallery_lg/images/03/37/27032_1063339200.jpg" alt=""></img>
          <p>Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget felis eget nunc lobortis mattis aliquam. Venenatis cras sed felis eget. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Volutpat est velit egestas dui.</p>
      </div>
      <div className = 'gnomeDiv' style={gnome3}>
        <img style={gnomeImage} src="https://i.etsystatic.com/10021999/r/il/0ed716/1104244467/il_570xN.1104244467_ecd7.jpg" alt=""></img>
          <p>Nec feugiat in fermentum posuere urna nec tincidunt praesent. Enim diam vulputate ut pharetra sit amet aliquam id diam. Fringilla phasellus faucibus scelerisque eleifend.</p>
      </div>
      <div className = 'gnomeDiv' style={gnome4}>
        <img style={gnomeImage} src="https://www.netclipart.com/pp/m/12-126386_gnome-fantasy-beard-free-picture-600-short-stories.png" alt=""></img>
          <p>Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Volutpat est velit egestas dui.</p>
      </div>
      <div className = 'gnomeDiv' style={gnome5}>
        <img style={gnomeImage} src="" alt=""></img>
          <p>description</p>
      </div>
      <div className = 'gnomeDiv' style={gnome6}>
        <img style={gnomeImage} src="" alt=""></img>
          <p>description</p>
      </div>

    </div>
  );
}

export default Gnomes;
