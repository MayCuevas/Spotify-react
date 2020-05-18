import React from 'react';
import './artist.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Info from '../../components/Info/info';

const Artist = () =>{
  return(
    <div className='container'>
      <Header />
      <div class="artist">
         <Info />
      </div>
      <Footer />
    </div>
  );
};

export default Artist;