import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

import Search from '../search/search';

const Header = () =>{
  const [active, setActive] = useState(false);

  const click = () =>{
    if(active){
    setActive(false)
    console.log('switch state to ' + active)
  }else{
      setActive(true);
      console.log('switch state to ' + active)}
    }

 if(active){
  return(
    <div className='header-container'>
      <Link to= '/' >
        <img alt='logo' src={process.env.PUBLIC_URL + '/icons/Spotify_Icon_RGB_green.png'}  className='header__logo' />
       </Link>
      <Search />   
     <button className='header-container__searchButton' onClick={click}></button>
    </div>
  );
 }else{
  return(
  <div className='header-container'>
  <Link to= '/' >
    <img alt='logo' src={process.env.PUBLIC_URL + '/icons/Spotify_Icon_RGB_green.png'}  className='header__logo' />
   </Link> 
 <button className='header-container__searchButton'  onClick={click}></button>
</div>
  )}
};

export default Header;