import { faCircleInfo, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function UniCard() {
	return (
		<div className='rounded  my-5 py-3 secondary-bg drop-shadow-lg box-border border-l-8 border-amber-600'>
			<div className='flex items-center justify-between  px-3'>
				<p className='text-xs m-0 rounded-lg bg-orange-300 py-1 px-2'>
					Student Loan
				</p>
				<p className='m-0 text-xs  text-red-700 font-semibold'>
					<span className='px-2 text-gray-500 '>Closes:</span> date
				</p>
			</div>
			<h1 className='my-3 text-xl text-center font-semibold'>
				University Name
			</h1>
			<div className='flex justify-between items-center mx-3'>
				<FontAwesomeIcon
					className='primary text-xl'
					icon={faCircleInfo}
				/>
				<button className='bg-primary text-xs px-5 py-1 text-white font-semibold rounded'>
					Apply
				</button>
			</div>
		</div>
	);
}

export default UniCard;
