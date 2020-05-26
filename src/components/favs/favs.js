import React, { useState } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";

const Favs = ( props ) => {
  const [enable, setState] = useState( false );
  let favs = [];
  const OnClick = () => {
    if ( !enable ) {
      favs.push( props );
      let favorites = JSON.stringify( favs );
      localStorage.setItem( "favorites", favorites );
      setState( true );
    } else {
      setState( false);
    }
  };
  return (
    <ToggleButton
      value="favorite"
      aria-label="favorite"
      onClick={OnClick}>
    <FavoriteIcon color="disabled" />
    </ToggleButton>
  );
};
export default Favs;
