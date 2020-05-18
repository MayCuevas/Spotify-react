import React from 'react';
import './info.scss';

const Info = () => {
  return(
    <div className='info'>
      <img className='info__image' />
      <h2 className='info__title'>Title</h2>
      <h3 className='info__subtitle'>Subtitle</h3>
      <p className='info__text'>Route</p>
    </div>
  );
};

export default Info;