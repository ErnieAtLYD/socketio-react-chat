import React from 'react';

const ChatFooter = ({
  sendMessage,
  username,
  setUsername,
  message,
  setMessage
}) => {
  return (
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
      <button onClick={sendMessage} className="btn btn-primary form-control">
        Send
      </button>
    </div>
  );
};

export default ChatFooter;
