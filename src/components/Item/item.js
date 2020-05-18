import React from 'react';
import './item.scss';

const Item = () => {
return (
  <div className="item__container">
    <img src = '' alt='item' className= 'item__image' />
    <div className='item__text'>
      <h4 className = 'item__text--title'> Hola soy un titulo</h4>
      <h6 className='item__text--subtitle'>Hola soy un subtitulo</h6>
    </div>
  </div>
)
};

export default Item;