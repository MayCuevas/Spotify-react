import React,{createContext,useState,useEffect} from 'react';


const SearchContext = createContext();

const SearchContextProvider = ({children}) =>{
  //este estate, es para los artistas. 
  const [res,setRes]= useState([]);

  useEffect(() =>{
    const artist = window.localStorage.getItem('res');
    const result = window.JSON.parse(artist)
    setRes(result);
    },[]
);

  return(
    <SearchContext.Provider value ={res}>
        {children}
    </SearchContext.Provider>
  );
}
export default SearchContext;
export { SearchContextProvider }