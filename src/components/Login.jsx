import React from 'react';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
	return (
		<div className=' w-full md:w-9/12 sm:w-10/12  mx-auto '>
			<p className='my-2 text-sm'>Dashboard</p>
			<h1 className='mb-2 text-xl font-semibold'>Sign In</h1>
			<div className='flex justify-center items-center w-full md:w-12/12 mx-auto border border-grey-900 rounded-lg p-2'>
				<FontAwesomeIcon icon={faGoogle} />
				<p className='mx-2'>Sing in with Google</p>
			</div>
			<p className='my-2 text-center'>or</p>
			<form action=''>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					className='border text-sm py-2 px-3 w-full border-grey-900 rounded'
					type='email'
					name='email'
					id=''
					placeholder='abdulsamad31650@gmail.com'
				/>
				<br />
				<label htmlFor='password'>Password</label>
				<br />
				<input
					className='border text-sm py-2 px-3 w-full border-grey-900 rounded'
					type='password'
					name='password'
					id=''
				/>
				<p className='text-right underline mb-3'>forget password</p>
				<button className='bg-primary w-full my-3 py-2 text-white font-bold rounded'>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
