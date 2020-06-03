import React, { useState, useEffect } from 'react';
import socketIo from '../utils/socket-io';

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
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Global Chat</div>
              <div className="messages">
                {chats.map((chat) => {
                  return (
                    <div>
                      {chat.author}: {chat.message}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card-footer">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control"
              />
              <button
                onClick={sendMessage}
                className="btn btn-primary form-control"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
