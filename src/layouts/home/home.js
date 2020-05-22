import React,{useEffect, useState} from 'react';
import './home.scss';

import Login from '../../services/auth';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Search from '../../components/search/search';
import Item from '../../components/Item/item';

const Home = () =>{

    const [favourites,setFavourites] = useState([]);


    useEffect(() => {
        Login();
        });

    return(
        <div className='container'>
            <Header />
            <div className= 'home__container'>
                <div className='home__content'>
                    <h4 className='home__title'>Welcome to</h4>
                    <h2 className='home__title'>Spoti-search</h2>
                    <p className='home__text'>Search your favourites songs over Spotify,<br />
                    just enter an artist's name in the following search box and enjoy!</p>
                    <div className='home__search'>
                    <Search redirect='/result/' />
                    </div>
                </div>
            {/* <Container  /> */}
            </div>
            <Footer />
        </div>
    );
}
export default Home;