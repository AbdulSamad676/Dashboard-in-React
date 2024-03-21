import {
	faCirclePlus,
	faEllipsis,
	faMagnifyingGlass,
	faPhone,
	faVideo,
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

	const msgsArray = [
		{
			text: 'Hi Ahmad How are you?',
			status: 'send',
		},
		{
			text: 'Hello Jhob I am good! Whats going there?',
			status: 'receive',
		},
		{
			text: 'Hi Ahmad How are you?',
			status: 'send',
		},
		{
			text: 'Hello Jhob I am good! Whats going there?',
			status: 'send',
		},
		{
			text: 'Hi Ahmad How are you?',
			status: 'receive',
		},
		{
			text: 'Hello Jhob I am good! Whats going there?',
			status: 'receive',
		},
		{
			text: 'Hi Ahmad How are you?',
			status: 'send',
		},
		{
			text: 'Hello Jhob I am good! Whats going there?',
			status: 'receive',
		},
	];

	return (
		<>
			<div className='border border-black p-1 col-span-12  sm:col-span-5 h-max  px-3'>
				{/* Chat Items Section Start */}

				<div className='flex justify-between px-5 items-center'>
					<p>Chats</p>
					<FontAwesomeIcon
						className='primary text-xl'
						icon={faCirclePlus}
					/>
				</div>
				<div className='flex justify-between m-5 text-sm font-thin px-3'>
					<button className='focus:text-blue-500'>Direct</button>
					<button className='focus:text-blue-500'>Departments</button>
					<button className='focus:text-blue-500'>Alerts</button>
				</div>
				<div className='flex items-center m-3 rounded-lg bg-gray-100 px-1 py-1'>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className='mx-3'
					/>
					<p className=''>Search</p>
				</div>
				<div className='single-chat sm:h-96 overflow-auto flex sm:block px-3'>
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
			{/* Chat Items Section End */}
			{/* chat conversation */}
			<div className='border border-black p-1 col-span-12 sm:col-span-7 h-max'>
				{/* conversation Header Start */}

				<div
					className={` conversation-header flex justify-between items-center  p-1 sm:py-1 sm:px-2 mx-1 sm:mx-0 rounded sm:w-full drop-shadow-lg secondary-bg `}
				>
					<div className='profile-section w-full flex items-center '>
						<div className='sm:mx-3'>
							<img src={Img1} width='auto' alt='chat profile' />
						</div>
						<div className=' flex flex-col justify-between w-full'>
							<p className='text-md font-semibold mb-1'>
								Alex Bawalya
							</p>

							<p className='text-xs text-justify'>
								Last Seen :{' '}
								<span className='mx-2 font-semibold text-gray-400'>
									4:45
								</span>
							</p>
						</div>
					</div>
					<div className='icons-section py-2 flex justify-end  w-full '>
						<FontAwesomeIcon
							className='text-gray-300 text-xl ml-3'
							icon={faPhone}
						/>
						<FontAwesomeIcon
							className='text-gray-300 text-xl ml-3'
							icon={faVideo}
						/>

						<FontAwesomeIcon
							className='text-gray-300 text-xl ml-3'
							icon={faEllipsis}
						/>
					</div>
				</div>

				{/* conversation Header End */}

				{/* Chat Body Start */}

				<div className='chat-body border border-black h-4/6 mt-3 px-2 py-1 overflow-auto'>
					<p className='text-center text-sm text-gray-400'>
						today <span className='font-semibold'>4:45</span>{' '}
					</p>
					{msgsArray?.map(msg => {
						return (
							<div
								className={`w-full ${
									msg.status === 'send'
										? 'flex justify-end'
										: 'flex justify-start'
								}`}
							>
								<div
									className={`sms w-max max-w-48  my-1 p-1 rounded ${
										msg.status === 'send'
											? 'bg-primary text-white'
											: 'bg-gray-100 text-black'
									}`}
								>
									{msg.text}
								</div>
							</div>
						);
					})}
				</div>

				{/* Chat Body End */}
				<div className='chat-footer border border-black mt-3'>
					I am footer
				</div>
			</div>
		</>
		// <div className='chat-item'>
		// 	<div className='flex justify-between px-5 items-center'>
		// 		<p>Chats</p>
		// 		<FontAwesomeIcon
		// 			className='primary text-xl'
		// 			icon={faCirclePlus}
		// 		/>
		// 	</div>
		// 	<div className='flex justify-between m-5 text-sm font-thin'>
		// 		<button className='focus:text-blue-500'>Direct</button>
		// 		<button className='focus:text-blue-500'>Departments</button>
		// 		<button className='focus:text-blue-500'>Alerts</button>
		// 	</div>
		// 	<div className='flex items-center my-3 mx-5 rounded-lg bg-gray-100 px-5 py-1'>
		// 		<FontAwesomeIcon icon={faMagnifyingGlass} />
		// 		<p className='mx-3'>Search</p>
		// 	</div>
		// 	<div className='single-chat sm:h-96 overflow-auto flex sm:block'>
		// 		{singleItems?.map(item => {
		// 			return (
		// 				<button
		// 					className='w-full'
		// 					onClick={() => {
		// 						alert(`${item.name} clicked`);
		// 					}}
		// 				>
		// 					<SingleChat key={item.k} data={item} />
		// 				</button>
		// 			);
		// 		})}
		// 	</div>
		// </div>
	);
}

export default ChatItem;
