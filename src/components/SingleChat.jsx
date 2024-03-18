import React from 'react';
import Img1 from '../assets/images/single1.png';
function SingleChat({ data }) {
	const { profileImg, name, time, message, className } = data;
	return (
		<div
			className={`flex items-start  py-3 px-2 rounded w-full drop-shadow-lg ${className}`}
		>
			<div className='mx-3'>
				<img src={profileImg} width={50} alt='chat profile' />
			</div>
			<div className='px-2 flex flex-col justify-between w-full'>
				<div className='flex justify-between mb-2'>
					<p className='text-sm'>{name}</p>
					<p className='text-xs'>{time}</p>
				</div>
				<p className='text-xs'>{message}</p>
			</div>
		</div>
	);
}

export default SingleChat;
