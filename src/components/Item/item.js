import React, { useState, useEffect, useContext } from "react";
import "./item.scss";
import { getArtistProfile,getAlbums, getAlbumTracks } from "../../services/search";


const Item = ({ data, route, type }) => {
  console.log(data)
  if (data) {
    return (
      <div className='holder__container'>
        {data.map((result) => (
            <div className="item__container"> <a
              onClick={
                async ()=>{ 
                  if(route != ''){
                    await  getArtistProfile(result.id)
                    await getAlbums(result.id)
                    await getAlbumTracks(result.id)
                    window.location.href = `/${route}/${result.id}`}
                }
               }>
              <div className="item__text">
                <h4 className="item__text--title">{result.name}</h4>
                {type === 'track'?
              <iframe src={`https://open.spotify.com/embed?uri=${result.uri}`}></iframe>: 
              <div class="track"> 
               <h6 className="item__text--subtitle">{result.type}</h6>
               <img src ={ result.images }
                 alt='item'
                 className= 'item__image' />
              </div>
                 }
                
              </div>
              </a>
            </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="item__container">
        <img src="" alt="item" className="item__image" />
        <div className="item__text">
          <h4 className="item__text--title"></h4>
          <h6 className="item__text--subtitle">Subtitle</h6>
        </div>
      </div>
    );
  }
};

export default Item;
