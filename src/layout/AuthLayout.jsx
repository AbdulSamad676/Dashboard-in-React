const AuthLayout = ({ children }) => {
	return (
		// <div>
		// 	{/* <AuthHeader/> */}
		// 	<main>{children}</main>
		// </div>
		<div className='grid grid-cols-12'>
		<div className='col-span-12 md:col-span-7 h-20 md:h-screen bg-primary flex justify-center items-center'>
			<h1 className='text-3xl text-white font-bold'>HELSB</h1>
		</div>
		<div className='col-span-12 md:col-span-5 flex justify-center items-center '>
			{children}
		</div>
	</div>
	);
};

export default AuthLayout;
