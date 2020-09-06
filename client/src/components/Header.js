import { Avatar } from '@material-ui/core';
import React from 'react';
import { MdAccessTime, MdHelpOutline, MdSearch } from 'react-icons/md';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header-left'>
        <Avatar className='header_avatar' alt={''} src={'  '}></Avatar>
        <MdAccessTime className='MuiSvgIcon-root' />
      </div>
      <div className='header-search'>
        <MdSearch />
        <input placeholder='Search' />
      </div>
      <div className='header-right'>
        <MdHelpOutline className='MuiSvgIcon-root' />
      </div>
    </div>
  );
}

export default Header;
