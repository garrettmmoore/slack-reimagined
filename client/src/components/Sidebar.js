import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InboxIcon from '@material-ui/icons/Inbox';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-info'>
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Garrett Moore
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
      <SidebarOption Icon={DraftsIcon} title='Saved items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
      <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show less' />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
      <SidebarOption Icon={AddIcon} title='Add' />
    </div>
  );
}

export default Sidebar;
