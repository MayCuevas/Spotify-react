import React from 'react';
import './container.scss';

import Item from '../Item/item';

const Holder = (props) =>{
 return (
   <div className='holder__container'>
     <Item />
   </div>
 );
};

export default Holder;