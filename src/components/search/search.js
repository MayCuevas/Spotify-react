import React from 'react';
import './search.scss';

import SearchArtists from '../../services/search';
import {Link} from "react-router-dom";

const Search = ({redirect}) =>{
console.log(redirect);
const onChanges = (event) => {
  if(event.target.value != ''){
    event.persist();
    let query = event.target.value;
    SearchArtists(query);
    localStorage.setItem('query',query);
  };
};
const onClick = (event) =>{
  window.location.assign(redirect);
}

return (
  <div className="search">
     <input type='text' placeholder='search' className='search__input' onChange={onChanges} />
     <input type='submit' class="search__button" onClick={onClick}/>
  </div>
);
}

export default Search;