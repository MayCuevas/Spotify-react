import React, {useState} from 'react';
import './artist.scss';

import Item from '../../components/Item/item';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Info from '../../components/Info/info';


const Artist = () =>{
 const [Artist,setArtist] = useState(
   JSON.parse(localStorage.getItem('artist')));

  let album = localStorage.getItem('albums');
  let listAlbum = JSON.parse(album);

console.log(listAlbum);
const text = {
  title : Artist.name, 
  subtitle : Artist.type,
  route : `Home > Artist>${Artist.name}` ,
  image : Artist.images[0].url
}
  return(
    <div className='container'>
      <Header />
      <div className="artist">
         <Info text = {text} />
         <Item data = {listAlbum.items} route='album' type='album' ></Item>
      </div>
      <Footer />
    </div>
  );
};

export default Artist;