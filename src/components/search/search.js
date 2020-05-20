import React from 'react';
import './search.scss';

import SearchApi from '../../services/search';

const Search = () =>{

const onChanges = (event) => {
  if(event.target.value != ''){
    event.persist();
    let query = event.target.value;
    SearchApi(query);
  };
};

return (
  <div className="search">
     <input type='text' placeholder='search' className='search__input' onChange={onChanges} />
  </div>
 
);
}

export default Search;