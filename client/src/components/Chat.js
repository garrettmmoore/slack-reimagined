import React from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
  const { roomId } = useParams();
  return (
    <div className='chat'>
      <div className='chat-header'>
        <div className='chat-headerLeft'>
          <h4 className='chat-channelName'>
            <strong>#general</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className='chat-headerRight'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
