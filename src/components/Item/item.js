import React from 'react';
import {Link} from "react-router-dom";
import './item.scss';

const Item = ({data}) => {
if(data){
return (
  <div>
    {
      data.map((result) => (
      <Link to={`/artist/${result.id}`}>
      <div className="item__container">
        <img src ={result.images[0].url} alt='item' className= 'item__image' />
        <div className='item__text'>
          <h4 className = 'item__text--title'>{result.name}</h4>
          <h6 className='item__text--subtitle'>{result.type}</h6>
        </div>
      </div>
      </Link>
      ))
    }
  </div>
)}else{
  return ( <div className="item__container">
  <img src ='' alt='item' className= 'item__image' />
  <div className='item__text'>
    <h4 className = 'item__text--title'>Title</h4>
    <h6 className='item__text--subtitle'>Subtitle</h6>
  </div>
</div>)
}
}

export default Item;