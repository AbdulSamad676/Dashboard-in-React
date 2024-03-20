import React from 'react';
import ChatItem from '../components/ChatItem';

function Chat() {
	return (
		<div className='grid grid-cols-12 border border-black p-1 rounded'>
			<div className='border border-black p-1 col-span-12  sm:col-span-5 h-auto sm:h-screen'>
				<ChatItem />
			</div>
			<div className='border border-black p-1 col-span-12 sm:col-span-7 h-screen'>
				conversation
			</div>
		</div>
	);
}

export default Chat;
