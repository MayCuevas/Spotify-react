const token = localStorage.getItem('auth');

const getQuery = async (query) => {
  const url = `https://api.spotify.com/v1/${query}`;
  const headers = {
    Authorization: `Bearer ${token}`
  };
 return await fetch(url,{headers});
}

const SearchApi = async (query) => {
  const call = await getQuery("search?q=" + (query) + "*&type=artist&limit=5");
  const res = await call.json();
  console.log(res);
  window.localStorage.setItem('res', JSON.stringify(res.artists.items));
};


export default SearchApi;