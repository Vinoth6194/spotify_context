import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Albums or Songs" type="text" />
      </div>
      {/* //* Name and Avatar Image and Name will be displayed dynamically based on
      //*response only for Premium members */}
      {/* Once you upgraded to the Premium Plan avatar can be set with */}
      {/* user?.images[0].url Name with user?,display_name */}
      <div className="header___right">
        <Avatar
          src="https://open.spotify.com/user/1992prrtzstq6ptye64ghu4ko"
          alt="VK"
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
