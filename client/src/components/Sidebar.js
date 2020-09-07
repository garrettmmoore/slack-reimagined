import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Sidebar.css';

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
    </div>
  );
}

export default Sidebar;
