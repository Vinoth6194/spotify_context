import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import { Avatar } from '@material-ui/core';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Albums or Songs" type="text" />
      </div>

      <div className="header___right">
        <Avatar src="" alt="VK" />
        <h4>Vinothkumar</h4>
      </div>
    </div>
  );
}

export default Header;
