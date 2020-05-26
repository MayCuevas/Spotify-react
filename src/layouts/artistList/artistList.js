import React from 'react';
import './artistList.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Info from '../../components/Info/info';
import Item from '../../components/Item/item';




const ArtistList = () =>{
 

const list = localStorage.getItem( 'resultList' );
const listItem =  JSON.parse( list );
console.log( listItem );
 const query = localStorage.getItem( 'query' );

  const text = {
    image : null,
    title : 'Artists', 
    subtitle : `you are currenly search for ${ query }`,
    route : 'Home > Artist'
  }

  return(
    <div className='container'>
      <Header />
      <div className='artistList'>
         <Info text = {text} />
         <Item data = {listItem}  route='artist' type='artist' />
      </div>
      <Footer />
    </div>
  );
};

export default ArtistList;