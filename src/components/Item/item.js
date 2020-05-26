import React from "react";
import "./item.scss";
import { getArtistProfile,getAlbums,getAlbumData, getAlbumTracks } from "../../services/search";
import Favs from "../favs/favs";


const Item = ({ data, route, type }) => {
  if ( data != undefined ) {
    return (
      <div className='holder__container'>
        { data.map(( result ) => (
         <div className='item__container'>
            <a 
            className=''
              onClick={
                async ()=>{ 
                  if( route != '' ){
                    await  getArtistProfile( result.id )
                    await getAlbums( result.id )
                    await getAlbumTracks( result.id )
                    await getAlbumData( result.id )
                    window.location.href = `/${ route }/${ result.id }`}
                }
               }>
                <div className='item'>   
                  { type === 'track'?
                      <div>
                        <div>
                        <Favs result={result}  />
                        <h4 className="item--title">{ result.name }</h4>
                        </div>
                        <iframe
                            className='item__iframe'
                            src={`https://open.spotify.com/embed?uri=${ result.uri }`}
                            width="300"
                            height="100"
                            frameBorder="0"
                            allow="encrypted-media" />
                      </div> : 
                      <div class="item__track">
                        <img src ={ result.images[0]  ? result.images[0].url : '' }
                          alt='item'
                          className= 'item__image' />
                        <div className='item--text'>
                          <h4 className="item--title">{ result.name }</h4>
                          <h6 className="item--subtitle">{ result.type }</h6>
                        </div>
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
