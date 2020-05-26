
import React,{createContext, useEffect} from 'react';

const StorageContext = createContext();
  
const StorageContextProvider = ({children}) =>{
  let favs = []
  useEffect(()=>{
    const favoritesList = localStorage.getItem('favorites');
    if(favoritesList !== undefined){
      const favorites = JSON.parse(favoritesList)
      if(favorites){
      favs.push(favorites[0].result);
      }
    }
  })
  
  
  return(
    <StorageContext.Provider value ={ favs }>
        {children}
    </StorageContext.Provider>
  );
}
export default StorageContext;
export {StorageContextProvider}