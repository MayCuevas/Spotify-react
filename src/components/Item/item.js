import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./item.scss";

import { getArtistProfile } from "../../services/search";
import SearchContext from "../../contexts/searchContext";

const Item = ({ data, route }) => {

  if (data) {
    return (
      <div>
        {data.map((result) => (
         
            // to= {{
            //   pathname: `/${route}/${result.id}`,
            //   state: getArtistProfile(result.id),
            // }}>
            <div className="item__container"> <button onClick={
           async ()=>{
            await  getArtistProfile(result.id)
              window.location.href = `/${route}/${result.id}`
            }
          } ></button>
              {/* <img src ={result.images[0].url}
            alt='item'
            className= 'item__image' /> */}
              <div className="item__text">
                <h4 className="item__text--title">{result.name}</h4>
                <h6 className="item__text--subtitle">{result.type}</h6>
              </div>
            </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="item__container">
        <img src="" alt="item" className="item__image" />
        <div className="item__text">
          <h4 className="item__text--title">Title</h4>
          <h6 className="item__text--subtitle">Subtitle</h6>
        </div>
      </div>
    );
  }
};

export default Item;
