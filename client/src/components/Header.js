import { Avatar } from '@material-ui/core';
import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from '../StateProvider';
import './Header.css';

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header-left">
        <Avatar
          variant={'rounded'}
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <div className="header-right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
