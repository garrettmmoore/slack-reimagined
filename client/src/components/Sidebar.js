import React, { useState, useEffect } from 'react';
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
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Sidebar() {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-info'>
          <h2>Slack Reimagined</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions' />
      <SidebarOption Icon={DraftsIcon} title='Saved items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
      <SidebarOption Icon={PeopleAltIcon} title='People' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show less' />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
      <hr />
      <SidebarOption Icon={AddIcon} title='Add' addChannelOption />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
