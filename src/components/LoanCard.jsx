import {
	faCircleQuestion,
	faCommentDollar,
	faLongArrowAltLeft,
	faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function LoanCard({ data }) {
	const { loanStatus, loanCurrency, payment, textColor } = data;
	return (
		<div className='secondary-bg dark:bg-gray-800 dark:shadow-lg grid grid-cols-10 sm:grid-cols-12 gap-x-5  rounded-lg p-4 drop-shadow-lg box-border'>
			<div className='flex justify-center items-center col-span-3 sm:col-span-4  p-1'>
				{loanStatus === 'Paid' ? (
					<FontAwesomeIcon
						className={`text-3xl md:text-2xl ${textColor} dark:text-white`}
						icon={faWallet}
					/>
				) : (
					<FontAwesomeIcon
						className={`text-3xl md:text-2xl ${textColor} dark:text-white`}
						icon={faCommentDollar}
					/>
				)}

				{/* <FontAwesomeIcon icon={faCircleQuestion} /> */}
			</div>
			<div className='col-span-7 sm:col-span-7  p-1'>
				<p className={` mb-3 p-0 text-xs  ${textColor} dark:text-white`}>
					{loanStatus}
				</p>
				<p className='m-0 p-0 text-xs dark:text-white'>
					{loanCurrency} <b className='text-sm'> {payment} </b>
				</p>
			</div>
		</div>
	);
}

export default LoanCard;
