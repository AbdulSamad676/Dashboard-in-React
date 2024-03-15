import React from 'react';
import IMG from '../assets/images/profile.png';
function Sidebar() {
	return (
		<div className='flex flex-col items-center justify-center border border-black h-screen text-white'>
			<div>
				<h1 className='text-3xl text-white font-bold'>HELSB</h1>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<img src={IMG} alt='' width={100} />
				<h2 className='text-sm font-semibold my-2'>Abdul Samad Khan</h2>
			</div>
			<div></div>
			<div>4</div>
		</div>
	);
}

export default Sidebar;
