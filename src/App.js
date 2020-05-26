import React,{useEffect, useContext} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './layouts/home/home';
import ArtistList from './layouts/artistList/artistList';
import Artist from './layouts/artist/artist';
import Album from './layouts/album/album';
import Login from './services/auth'
import LoginContext from './contexts/LoginContext';
import { StorageContextProvider } from './contexts/localStorage';

const App = () => {
  const [ IsLoggedIn,setLoginStatus ]  = useContext( LoginContext );
  useEffect(()=>{
    if( IsLoggedIn === false ){
      Login();
      console.log( IsLoggedIn )
      setLoginStatus( true );
    }}) 

  return (
    
    <StorageContextProvider>
    <Router>
      <div className='App'>
        <Route path='/' exact component= { Home } />
        <Route path='/result' component= { ArtistList } />
        <Route path='/artist/:id'  component= { Artist } />
        <Route path='/album' component= { Album } />
      </div>
    </Router>
    </ StorageContextProvider>
  )
}
export default App;
