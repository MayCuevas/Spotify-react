import React, { useEffect, useState, useRef} from 'react';
import './artist.scss';

import Item from '../../components/Item/item';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Info from '../../components/Info/info';
import {getArtistProfile} from '../../services/search';

const Artist = (props) =>{
 const [Artist,setArtist] = useState(
   JSON.parse(localStorage.getItem('artist')));

let data = ''
let item = {};
  //aca traigo al artista 

//// const id = props.location.state;
 //   getArtistProfile(id);
    data = localStorage.getItem('artist'); 
  item = JSON.parse(data);

//aca armo el objeto para info 
const text = {
  title : Artist.name, 
  subtitle : Artist.type,
  route : `Home > Artist>${Artist.name}` 
}

//aca tiro el resultado 
  return(
    <div className='container'>
      <Header />
      <div className="artist">
         <Info text = {text} />
         <Item ></Item>
      </div>
      <Footer />
    </div>
  );
};

export default Artist;