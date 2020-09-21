import React, { useState } from 'react';
import './ChatInput.css';
import db from '../firebase';
import firebase from 'firebase';
import { useStateValue } from '../StateProvider';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = e => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        user: user.displayName,
        userImage: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    setInput('');
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
