const token = localStorage.getItem('auth');

//funcion que arma la base de la llamada
const getQuery = async (query) => {
  const url = `https://api.spotify.com/v1/${query}`;
  const headers = {
    Authorization: `Bearer ${token}`
  };
 return await fetch(url,{headers});
}

const SearchArtists = async (query) => {
  const call = await getQuery("search?q=" + (query) + "*&type=artist&limit=5");
  const res = await call.json();
  console.log(res);
  //siempre voy a buscar por artista 
  window.localStorage.setItem('res', JSON.stringify(res.artists.items));
  
};

const getArtistProfile = async (id) => {
  const call = await getQuery(`artist/${id}`);
  const res = await call.json();
  window.localStorage.setItem('artist', JSON.stringify(res));
};

export default SearchArtists;