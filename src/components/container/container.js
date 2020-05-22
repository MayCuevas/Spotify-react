import React from 'react';
import './container.scss';

import Item from '../Item/item';
//container recibe props
const Container = (props) =>{
 return (
   <div className='holder__container'>
     <Item data={props.type}  route={props.route} />
   </div>
 );
};

export default Container;