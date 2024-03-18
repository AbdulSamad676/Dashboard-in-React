import {
	faCirclePlus,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SingleChat from './SingleChat';
import Img1 from '../assets/images/single1.png';
function ChatItem() {
	const singleItems = [
		{
			profileImg: Img1,
			name: 'Alex Bywalya',
			time: '4:45',
			message: 'Hello Alex',
			className: 'bg-primary my-2 text-white',
		},
		{
			profileImg: Img1,
			name: 'Jay Bandy',
			time: '4:45',
			message: 'Are we Meeting today',
			className: 'secondary-bg my-2',
		},
	];
	return (
		<div className='chat-item'>
			<div className='flex justify-between px-5 items-center'>
				<p>Chats</p>
				<FontAwesomeIcon
					className='primary text-xl'
					icon={faCirclePlus}
				/>
			</div>
			<div className='flex justify-between m-5 text-sm font-thin'>
				<button className='focus:text-blue-500'>Direct</button>
				<button className='focus:text-blue-500'>Departments</button>
				<button className='focus:text-blue-500'>Alerts</button>
			</div>
			<div className='flex items-center my-3 mx-5 rounded-lg bg-gray-100 px-5 py-1'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
				<p className='mx-3'>Search</p>
			</div>
			<div className='single-chat'>
				{singleItems?.map(item => {
					return <SingleChat key={item.k} data={item} />;
				})}
			</div>
		</div>
	);
}

export default ChatItem;
