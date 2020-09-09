import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import './Chat.css';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetaills] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetaills(snapshot.data()));
    }
  }, [roomId]);

  return (
    <div className='chat'>
      <div className='chat-header'>
        <div className='chat-headerLeft'>
          <h4 className='chat-channelName'>
            <strong>{roomDetails?.name}</strong>
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
