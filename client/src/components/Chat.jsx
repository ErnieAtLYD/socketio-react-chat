import React, { useState, useEffect } from 'react';
import socketIo from '../utils/socket-io';
import ChatFooter from './ChatFooter';
import ChatMessages from './ChatMessages';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    socketIo.emit('SEND_MESSAGE', { author: username, message: message });
    setMessage('');
  };

  const addMessage = (data) => {
    setChats(chats.concat({ author: data.author, message: data.message }));
  };

  useEffect(() => {
    socketIo.on('RECEIVE_MESSAGE', (data) => {
      console.log('RECEIVE_MESSAGE', data);
      addMessage(data);
    });
  }, [chats]);

  return (
    <div className="container">
      <ChatMessages chats={chats} />
      <ChatFooter
        username={username}
        setUsername={setUsername}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
