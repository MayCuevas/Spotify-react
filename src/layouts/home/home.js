import React from 'react';
import './home.scss';


import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Holder from '../../components/container/container';
const Home = () =>{
return(
    <div className='container'>
        <Header />
        <div className= 'home__container'>
            <div className='home__content'>
                <h4 className='home__title'>Welcome to</h4>
                <h2 className='home__title'>Spoti-search</h2>
                <p className='home__text'>Search your favourites songs over Spotify,<br />
                just enter an artist's name in the following search box and enjoy!</p>
            </div>
        <Holder />
        </div>
        <Footer />
    </div>
);
}
export default Home;