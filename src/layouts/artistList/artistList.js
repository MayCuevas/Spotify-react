import React,{useContext} from 'react';
import './artistList.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Info from '../../components/Info/info';
import Search from '../../components/search/search';
import Container from '../../components/container/container';

import SearchContext from '../../contexts/searchContext'

const ArtistList = () =>{

  const context = useContext(SearchContext)
  

 const query = localStorage.getItem('query');

  const text = {
    title : 'Artists', 
    subtitle : `you are currenly search for ${query}`,
    route : 'Home > Artist'
  }

  return(
    <div className='container'>
      <Header />
      <Search />
      <div className='artistList'>
         <Info text = {text} />
         <Container type = {context}/>
      </div>
      <Footer />
    </div>
  );
};

export default ArtistList;