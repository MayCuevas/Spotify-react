import React from 'react';
import './container.scss';

import Item from '../Item/item';
//container recibe props
const Container = ({type}) =>{

 return (
   <div className='holder__container'>
     <Item data={type} />
   </div>
 );
};

export default Container;