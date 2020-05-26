import React,{useState} from 'react';
import './album.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Item from '../../components/Item/item';
import Info from '../../components/Info/info';


const Album = () =>{
  const [Album,setAlbum] = useState(
    JSON.parse(localStorage.getItem('albumData')));

    let tracks = localStorage.getItem('tracks');
    let listTracks = JSON.parse(tracks);

    const text = {
      image : Album.images[0].url,
      title : Album.name,
      subtitle: `${Album.artists[0].name} - ${Album.release_date}` ,
      route : 'Home > Artist > Album '
    }



  return(
    <div className='container'>
      <Header />
    <div className='album'>
      <Info text={text} />
      <Item data={listTracks.items} route='' type='track' />
      <Footer />
    </div>
    </div>
  );
};

export default Album;