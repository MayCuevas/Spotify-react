import React from 'react';
import './artistList.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Info from '../../components/Info/info';
import Container from '../../components/container/container';

const ArtistList = () =>{
  return(
    <div className='container'>
      <Header />
      <div className='artistList'>
         <Info />
         <Container />
      </div>
      <Footer />
    </div>
  );
};

export default ArtistList;