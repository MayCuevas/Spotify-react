import React,{useState} from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Item from '../../components/Item/item';
import Info from '../../components/Info/info';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Album = () =>{
  const [Album,setAlbum] = useState(
    JSON.parse(localStorage.getItem('albums')));

    let tracks = localStorage.getItem('tracks');
    let listTracks = JSON.parse(tracks);
    console.log(listTracks)
    const text = {
      title : Album.name,
      route : 'Home > Artist > Album '
    }



  return(
    <div className='container'>
      <Header />
      <Info text={text} />
      <Item data={listTracks.items} route='' type='track' />
      <FontAwesomeIcon icon={faHome} />
      <Footer />
    </div>
  );
};

export default Album;