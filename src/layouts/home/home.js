import React,{useEffect, useContext, useState} from 'react';
import './home.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Search from '../../components/search/search';
import Item from '../../components/Item/item';
import StorageContext from '../../contexts/localStorage';

const Home = () =>{
    const [favList, setFavlist] = useState([]);
    let favorites = useContext(StorageContext);
    useEffect(()=>{
        setFavlist(favorites);
    })
    
    return(
        <div className='container'>
            <Header />
            <div className= 'home__container'>
                <div className='home__content'>
                    <h4 className='home__content--title'>Welcome to</h4>
                    <h2 className='home__content--title'>Spoti-search</h2>
                    <p className='home__content--text'>Search your favourites songs over Spotify,<br />
                    just enter an artist's name in the following search box and enjoy!</p>
                    <div className='home__search'>
                     <Search />
                    </div>
                    {
                      favList ?
                      <div className='favorites'>
                        <h3 className='home__content--text'>Favorites</h3>
                        <Item data = { favList } type= 'track' />
                        </div> :
                        null 
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;