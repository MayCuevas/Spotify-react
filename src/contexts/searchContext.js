import React,{createContext,useState,useEffect} from 'react';


const SearchContext = createContext();

const SearchContextProvider = ({children}) =>{

  useEffect(() =>{ },[]);

  return(
    <SearchContext.Provider value ={''}>
        {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
export { SearchContextProvider }