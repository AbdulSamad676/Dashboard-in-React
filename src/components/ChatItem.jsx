import {
	faCirclePlus,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SingleChat from './SingleChat';
import Img1 from '../assets/images/single1.png';
import Img2 from '../assets/images/single2.png';
import Img3 from '../assets/images/single3.png';
import Img4 from '../assets/images/single4.png';
import Img5 from '../assets/images/single5.png';
import Img6 from '../assets/images/single6.png';

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
			profileImg: Img2,
			name: 'Jay Bandy',
			time: '4:45',
			message: 'Are we Meeting today',
			className: 'secondary-bg my-2',
		},
		{
			profileImg: Img3,
			name: 'Mike Chalo',
			time: '4:45',
			message: 'Are we Meeting today',
			className: 'secondary-bg my-2',
		},
		{
			profileImg: Img4,
			name: 'Jordan Mate',
			time: '4:45',
			message: 'Are we Meeting today',
			className: 'secondary-bg my-2',
		},
		{
			profileImg: Img5,
			name: 'Jani Zulu',
			time: '4:45',
			message: 'Are we Meeting today',
			className: 'secondary-bg my-2',
		},
		{
			profileImg: Img6,
			name: 'Ranvi Cheelo',
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
			<div className='single-chat sm:h-96 overflow-auto flex sm:block'>
				{singleItems?.map(item => {
					return (
						<button
							className='w-full'
							onClick={() => {
								alert(`${item.name} clicked`);
							}}
						>
							<SingleChat key={item.k} data={item} />
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default ChatItem;
