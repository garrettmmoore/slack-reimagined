import { Avatar } from '@material-ui/core';
import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';

import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <Avatar className='header_avatar' alt={''} src={'  '}></Avatar>
        <AccessTimeIcon />
      </div>
      <div className='header-search'>
        <SearchIcon />
        <input placeholder='Search' />
      </div>
      <div className='header-right'>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
