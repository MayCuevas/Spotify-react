
import React,{createContext} from 'react';

const StorageContext = createContext();
  
const StorageContextProvider = ({children}) =>{
  const favoritesList = localStorage.getItem('favorites');
  let favs = []
  if(favoritesList != undefined){
  const favorites = JSON.parse(favoritesList);
  favs.push(favorites[0].result);
  }
  
  return(
    <StorageContext.Provider value ={ favs }>
        {children}
    </StorageContext.Provider>
  );
}
export default StorageContext;
export {StorageContextProvider}