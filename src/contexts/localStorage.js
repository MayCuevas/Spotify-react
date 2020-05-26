
import React,{createContext,useEffect,useState} from 'react';

const StorageContext = createContext();
  
const StorageContextProvider = ({children}) =>{
const favoritesList = localStorage.getItem('favorites');
const favorites = JSON.parse(favoritesList);
const favs = [favorites[0].result]
console.log(favs)

  return(
    <StorageContext.Provider value ={ favs }>
        {children}
    </StorageContext.Provider>
  );
}
export default StorageContext;
export {StorageContextProvider}