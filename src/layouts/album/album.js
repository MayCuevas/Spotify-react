import React,{useState} from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Item from '../../components/Item/item';
const Album = () =>{
  const [Tracks,setTracks] = useState(
    JSON.parse(localStorage.getItem('tracks')));

    let tracks = localStorage.getItem('tracks');
    let listTracks = JSON.parse(tracks);
    console.log(listTracks)
  return(
    <div className='container'>
      <Header />
      <p>Album</p>
      <Item data={listTracks.items} route='' type='track' />
      <Footer />
    </div>
  );
};

export default Album;