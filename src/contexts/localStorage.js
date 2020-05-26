
import React,{createContext,useEffect,useState} from 'react';

const StorageContext = createContext();
  
const StorageContextProvider = ({children}) =>{
const favoritesList = localStorage.getItem('favorites');
let favs = []
if(favoritesList != undefined){
const favorites = JSON.parse(favoritesList);
favs = [favorites.result]
}


  return(
    <StorageContext.Provider value ={ favs }>
        {children}
    </StorageContext.Provider>
  );
}
export default StorageContext;
export {StorageContextProvider}