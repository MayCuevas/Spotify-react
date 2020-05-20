import React,{useState,useEffect, useContext} from 'react';

import './item.scss';
import SearchContext from '../../contexts/searchContext';

const Item = () => {

  const context = useContext(SearchContext)
  // const [data,setData] = useState();

  // useEffect(()=>{
  //   setData(context.res)
  // },[])


const data = context;
 console.log(data)

return <div>
  {
  data.map((result) => (
  <div className="item__container">
    <img src = '' alt='item' className= 'item__image' />
    <div className='item__text'>
      <h4 className = 'item__text--title'>{result.name}</h4>
      <h6 className='item__text--subtitle'>{result.type}</h6>
    </div>
  </div>
  ))}
  </div>
}

export default Item;