import React,{useEffect} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './layouts/home/home';
import ArtistList from './layouts/artistList/artistList';
import Artist from './layouts/artist/artist';
import Album from './layouts/album/album';
import Login from './services/auth';
import { SearchContextProvider } from './contexts/searchContext';

const App = () => {

  useEffect(() => {
    if(!localStorage.getItem('auth'))
    Login();
    });

  return (
    <SearchContextProvider>
       <Router>
      <div className='App'>
        <Route path='/' exact component= { Home } />
        <Route path='/artistList' component= { ArtistList } />
        <Route path='/artist' component= { Artist } />
        <Route path='/album' component= { Album } />
      </div>
    </Router>
    </SearchContextProvider>
  );
}

export default App;
