import App from '../src/App';
import LoginPage from '../src/pages/LoginPage';

const rootRoutes = [
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: 'dashboard', // Remove the leading '/' here
		element: <App />,
		children: [
			{
				path: '', // Empty string since this is the default route for dashboard
				// element: <Home />,
			},
			{
				path: 'about', // Remove the leading '/' here
				// element: <About />,
			},
			{
				path: 'contact', // Remove the leading '/' here
				// element: <Contact />,
			},
			{
				path: 'projects', // Remove the leading '/' here
				// element: <Projects />,
			},
		],
	},
];

export default rootRoutes;
