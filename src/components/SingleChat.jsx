import React from 'react';
import Img1 from '../assets/images/single1.png';
function SingleChat({ data }) {
	const { profileImg, name, time, message, className } = data;
	return (
		<div
			className={`flex justify-center sm:items-start p-1 sm:py-3 sm:px-2 mx-1 sm:mx-0 rounded sm:w-full drop-shadow-lg ${className}`}
		>
			<div className='sm:mx-3'>
				<img src={profileImg} width={50} alt='chat profile' />
			</div>
			<div className='px-2 hidden sm:flex flex-col justify-between w-full'>
				<div className='flex justify-between mb-2'>
					<p className='text-sm'>{name}</p>
					<p className='text-xs'>{time}</p>
				</div>
				<p className='text-xs text-justify'>{message}</p>
			</div>
		</div>
	);
}

export default SingleChat;
