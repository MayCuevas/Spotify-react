import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () =>{
  return(
    <div className='header-container'>
      <Link to= '/' >
        <img alt='logo' src={process.env.PUBLIC_URL + '/icons/Spotify_Icon_RGB_green.png'}  className='header__logo' />
       </Link>     
      <p className= 'header__text'>Here goes the search</p>
    </div>
  );
};

export default Header;