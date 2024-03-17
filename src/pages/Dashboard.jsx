import React from 'react';
import LoansCard from '../components/UniCard';

function Dashboard() {
	return (
		<div className='w-11/12 mx-auto mt-5 border border-black rounded'>
			<div className='loans-row my-5 grid grid-cols-3 gap-x-10 w-10/12 '>
				<LoansCard />
				<LoansCard />
			</div>
			<div className='uni-row'>universities content</div>
		</div>
	);
}

export default Dashboard;
