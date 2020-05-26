import React from 'react';
import './search.scss';

import { SearchArtists } from '../../services/search';

const Search = () =>{
  let query = ''
  const onChanges = ( event ) => { 
    event.persist();
    if( event.target.value !== '' ){     
      query = event.target.value;
      localStorage.setItem( 'query',query );
      SearchArtists(query);
    };
  };
  const onClick = (event) =>{
    window.location.assign(/result/);
  }

  return (
    <div className="search">
      <input type='submit' className="search__button" onClick={ onClick } />
      <input type='text' placeholder='search' className='search__input' onChange={ onChanges } />
    </div>
  );
}

export default Search;