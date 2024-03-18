import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LoansCard from '../components/LoanCard';
import UniCard from '../components/UniCard';

function Dashboard() {
	const textColor = 'text-blue-700';
	const loanData = [
		{
			loanStatus: 'Total Loan',
			loanCurrency: 'ZMK',
			payment: '10000',
			textColor: 'text-violet-700',
		},
		{
			loanStatus: 'Paid',
			loanCurrency: 'ZMK',
			payment: '3000',
			textColor: 'text-green-500',
		},
	];

	return (
		<div className='w-11/12 mx-auto mt-5 border border-black rounded px-2'>
			<div className='loans-row my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full sm:w-10/12 box-border '>
				{loanData?.map(item => {
					return <LoansCard key={item.key} data={item} />;
				})}
				{/* <LoansCard textColor={textColor} />
				<LoansCard /> */}
			</div>
			<div className='label-row mt-16 mb-5 flex flex-wrap justify-between'>
				<div className='flex items-center justify-center sm:justify-start w-full sm:w-6/12 md:w-4/12 p-2'>
					<p className='uppercase text-sm primary p-0 m-0 '>
						Loan & Scholership
					</p>
				</div>
				<div className='flex items-center justify-center secondary-bg drop-shadow-lg w-full sm:w-6/12 md:w-4/12 p-2'>
					<FontAwesomeIcon className='primary mr-3' icon={faFile} />
					<p className='p-0 m-0 text-sm'> Download Statment</p>
				</div>
			</div>
			<div className='my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full sm:w-11/12 box-border '>
				<UniCard />
				{/* <LoansCard textColor={textColor} />
				<LoansCard /> */}
			</div>
		</div>
	);
}

export default Dashboard;
