import React from 'react';
import './info.scss';

const Info = ({text}) => {
if( text.image !== undefined ){
 return(
    <div className='info'>
        <img className='info__image'
        alt='info'
        src={ text.image } />
        <h2 className='info__title'>{text.title}</h2>
        <h3 className='info__subtitle'>{text.subtitle}</h3>
        <p className='info__text'>{text.route}</p>
    </div> )}
else{
 return(
    <div className='info'>
        <h2 className='info__title'>{text.title}</h2>
        <h3 className='info__subtitle'>{text.subtitle}</h3>
        <p className='info__text'>{text.route}</p>
    </div>
      )}
};

export default Info;