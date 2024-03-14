import React from 'react';
import '../assets/css/style.css';
import Login from '../components/Login';
function LoginPage() {
	return (
		<div className='grid grid-cols-12'>
			<div className='col-span-7 h-screen bg-primary flex justify-center items-center'>
				<h1 className='text-3xl text-white font-bold'>HELSB</h1>
			</div>
			<div className='col-span-5 flex justify-center items-center '>
				<Login />
			</div>
		</div>
	);
}

export default LoginPage;
