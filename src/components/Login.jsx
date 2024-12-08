import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth
import { auth } from '../../firebase'; // Import your Firebase configuration
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	// Handle Login Authentication
	async function handleLogin(e) {
		e.preventDefault(); // Prevent form submission
		try {
			// Sign in with Firebase Authentication
			await signInWithEmailAndPassword(auth, email, password);
			alert('Login successful!');
			navigate('/dashboard'); // Navigate to dashboard on success
		} catch (err) {
			setError(err.message); // Display error message
		}
	}

	return (
		<div className='w-10/12 md:w-9/12 sm:w-10/12 mx-auto'>
			<p className='my-2 text-sm'>Dashboard</p>
			<h1 className='mb-2 text-xl font-semibold'>Sign In</h1>
			<div className='flex justify-center items-center w-full md:w-12/12 mx-auto border border-grey-900 rounded-lg p-2 cursor-pointer'>
				<FontAwesomeIcon icon={faGoogle} />
				<p className='mx-2'>Sign in with Google</p>
			</div>
			<p className='my-2 text-center'>or</p>
			<form onSubmit={handleLogin}>
				{error && <p className='text-red-500 mb-3'>{error}</p>}
				<label htmlFor='email'>Email</label>
				<br />
				<input
					className='border text-sm py-2 px-3 w-full border-grey-900 rounded'
					type='email'
					name='email'
					id='email'
					placeholder='example@gmail.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<br />
				<label htmlFor='password'>Password</label>
				<br />
				<input
					className='border text-sm py-2 px-3 w-full border-grey-900 rounded'
					type='password'
					name='password'
					id='password'
					placeholder='Enter your password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<p className='text-right underline mb-3'>Forgot password?</p>
				<Link to='/sign-up'>
					<p className='underline mb-3'>Sign up</p>
				</Link>
				<button
					className='bg-primary w-full my-3 py-2 text-white font-bold rounded'
					type='submit'
				>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
