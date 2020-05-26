

const token = localStorage.getItem( 'auth' );


const getQuery = async ( query ) => {
  const url = `https://api.spotify.com/v1/${ query }`;
  const headers = {
    Authorization: `Bearer ${ token }`
  };
 return await fetch(url,{ headers });
}


export const SearchArtists = async ( query ) => {
  const call = await getQuery("search?q=" + ( query ) + "*&type=artist&limit=6");
  const res = await call.json();
  const artists = res.artists.items;
  window.localStorage.setItem('resultList', JSON.stringify( artists ));
};

export const getArtistProfile = async ( id ) => {
  const call = await getQuery(`artists/${ id }`);
  const artist = await call.json();
  window.localStorage.setItem('artist', JSON.stringify( artist ));
};


export const getAlbums = async ( id ) => {
  const call = await getQuery(`artists/${ id }/albums`);
  const albums = await call.json();
  window.localStorage.setItem('albums', JSON.stringify( albums ));
};

export const getAlbumData = async ( id ) => {
  const call = await getQuery(`albums/${ id }`);
  const albumData = await call.json();
  window.localStorage.setItem('albumData', JSON.stringify( albumData ));
};

export const getAlbumTracks = async ( id ) => {
  const call = await getQuery(`albums/${ id }/tracks`);
  const tracks = await call.json();
  window.localStorage.setItem('tracks', JSON.stringify( tracks ));
};
