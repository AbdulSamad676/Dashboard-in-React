import { faBell, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header() {
	return (
		<div className='header w-full grid grid-cols-12 gap-3 drop-shadow-lg px-3 py-2'>
			<div className=' font-thin text-blue-700 p-1 rounded col-span-3 md:col-span-2 flex justify-center items-center'>
				<h2>Dashboard</h2>
			</div>
			<div className='grid  md:grid-cols-2 items-center   p-1 rounded col-span-6 md:col-span-7'>
				<p className='text-xs ml-auto primary p-0 my-0 hidden md:block'>
					Your Profile Complete ratio:{' '}
					<span className='font-semibold'>80%</span>
				</p>
				<div className='bg-gray-100 rounded h-2 mx-3 '>
					<div className='bg-green-500 w-10/12 text-xs text-center rounded text-white h-2'></div>
				</div>
			</div>
			<div className='flex justify-center items-center   p-1 rounded   col-span-3'>
				<FontAwesomeIcon
					className='mx-3 primary text-lg'
					icon={faCircleQuestion}
				/>
				<FontAwesomeIcon
					className='mx-3 primary text-lg'
					icon={faBell}
				/>
			</div>
		</div>
	);
}

export default Header;
