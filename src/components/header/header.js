import React from 'react';
import './header.scss';

const Header = () =>{
  return(
    <div className='header-container'>
      <img alt='logo' src=''  className='header__logo'/>
      <p className= 'header__text'>Here goes the search</p>
    </div>
  );
};

export default Header;