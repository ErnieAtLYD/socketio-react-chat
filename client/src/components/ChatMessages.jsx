import React from 'react';

const ChatMessages = ({ chats }) => {
  return (
    <div className="messages">
      {chats.map((chat) => {
        return (
          <div>
            {chat.author}: {chat.message}
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
