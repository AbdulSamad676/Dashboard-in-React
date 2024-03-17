import React from 'react';
import LoansCard from '../components/LoanCard';

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
		<div className='w-11/12 mx-auto mt-5 border border-black rounded'>
			<div className='loans-row my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full sm:w-10/12 box-border '>
				{loanData?.map(item => {
					return <LoansCard key={item.key} data={item} />;
				})}
				{/* <LoansCard textColor={textColor} />
				<LoansCard /> */}
			</div>
			<div className='uni-row'>universities content</div>
		</div>
	);
}

export default Dashboard;
