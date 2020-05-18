import React from 'react';
import './header.scss';

const Header = () =>{
  return(
    <div className='header-container'>
      <img alt='logo' src={process.env.PUBLIC_URL + '/icons/Spotify_Icon_RGB_green.png'}  className='header__logo'/>
      <p className= 'header__text'>Here goes the search</p>
    </div>
  );
};

export default Header;