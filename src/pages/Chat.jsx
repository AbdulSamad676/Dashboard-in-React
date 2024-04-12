import React from 'react';
import ChatItem from '../components/ChatItem';
import ChatItemUpdated from '../components/ChatItemUpdated';

function Chat() {
  return (
    <div className='chat-section grid grid-cols-12  rounded'>
      {/* <ChatItem /> */}
      <ChatItemUpdated />
    </div>
  );
}

export default Chat;
