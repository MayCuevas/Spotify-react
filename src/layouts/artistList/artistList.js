import React from 'react';
import './artistList.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Info from '../../components/Info/info';
import Container from '../../components/container/container';

const ArtistList = () =>{

  const text = {
    title : 'Artists', 
    subtitle : 'you are currenly search the ' ,
    route : 'Home > Artist'
  }


  return(
    <div className='container'>
      <Header />
      <div className='artistList'>
         <Info text={text} />
         <Container />
      </div>
      <Footer />
    </div>
  );
};

export default ArtistList;