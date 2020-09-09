import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';
import './Chat.css';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetaills] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetaills(snapshot.data()));
      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
    console.log('roomMessages', roomMessages);
  }, [roomId]);

  return (
    <div className='chat'>
      <div className='chat-header'>
        <div className='chat-headerLeft'>
          <h4 className='chat-channelName'>
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className='chat-headerRight'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className='chat-body'>
        {roomMessages.map(({ message, timestamp, user, userImage }, i) => (
          <Message
            key={i}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
