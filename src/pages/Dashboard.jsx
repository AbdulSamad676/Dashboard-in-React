import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LoansCard from '../components/LoanCard';
import UniCard from '../components/UniCard';

function Dashboard() {
	// const textColor = 'text-blue-700';
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

	const uniData = [
		{
			cardLabel: 'Student Loan',
			labelBg: 'bg-orange-300',
			cardBorder: ' border-l-8 border-amber-500',
			date: '07/01/2021',
			name: 'Mukuba University',
		},
		{
			cardLabel: 'Schelorship',
			labelBg: 'bg-green-300',
			cardBorder: 'border-l-8 border-green-500',
			date: '09/07/2021',
			name: 'China Schelorship',
		},
		{
			cardLabel: 'Student Loan',
			labelBg: 'bg-orange-300',
			cardBorder: 'border-l-8 border-amber-500',
			date: '10/12/2021',
			name: 'University of Zambia',
		},
	];

	return (
		<div className='w-11/12 mx-auto mt-10 bg-blue-100  rounded-lg p-2'>
			<div className='loans-row my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full sm:w-10/12 box-border '>
				{loanData?.map(item => {
					return <LoansCard key={item.key} data={item} />;
				})}
				{/* <LoansCard textColor={textColor} />
				<LoansCard /> */}
			</div>
			<div className='label-row mt-16 mb-5 flex flex-wrap justify-between'>
				<div className='flex items-center justify-center sm:justify-start w-full sm:w-6/12 md:w-4/12 py-2'>
					<p className='uppercase text-sm primary p-0 m-0 '>
						Loan & Scholership
					</p>
				</div>
				<div className='flex items-center justify-center secondary-bg drop-shadow-lg w-full sm:w-6/12 md:w-4/12 p-2'>
					<FontAwesomeIcon className='primary mr-3' icon={faFile} />
					<p className='p-0 m-0 text-sm'> Download Statment</p>
				</div>
			</div>
			<div className='my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full md:w-11/12 sm:w-12/12 box-border '>
				{uniData?.map(item => {
					return <UniCard key={item.key} data={item} />;
				})}

				{/* <LoansCard textColor={textColor} />
				<LoansCard /> */}
			</div>
		</div>
	);
}

export default Dashboard;
