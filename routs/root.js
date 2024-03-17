import { lazy } from 'react';
import AuthLayout from '../src/layout/AuthLayout';
import DashboardLayout from '../src/layout/DashbordLayout';
import Chat from '../src/pages/Chat';
import User from '../src/pages/User';

// const Login = lazy(() => import('../pages/auth/login'));
// const Register = lazy(() => import('../pages/auth/Register'));
// const Dashboard = lazy(() => import('../pages/dashboard'));
// const Products = lazy(() => import('../pages/product/product'));
// const AllUsers = lazy(() => import('../pages/users/alluser'));
// const MapView = lazy(() => import('../pages/mapview'));
// const Calender = lazy(() => import('../pages/calender'));
// const Profile = lazy(() => import('../pages/profile'));
import Dashboard from '../src/pages/Dashboard';
import LoginPage from '../src/pages/LoginPage';
import Help from '../src/pages/Help';
// import AuthLayout from '';
// import DashboardLayout from '../layouts/DashboardLayout';

export const routesConfig = [
	{
		path: '/',
		component: LoginPage,
		layout: AuthLayout,
	},
	// {
	// 	path: '/auth/register',
	// 	component: Register,
	// 	layout: AuthLayout,
	// },
	{
		path: '/dashboard',
		component: Dashboard,
		layout: DashboardLayout,
	},
	{
		path: '/chat',
		component: Chat,
		layout: DashboardLayout,
	},
	{
		path: '/user',
		component: User,
		layout: DashboardLayout,
	},
	{
		path: '/help',
		component: Help,
		layout: DashboardLayout,
	},
	// {
	// 	path: '/calender',
	// 	component: Calender,
	// 	layout: DashboardLayout,
	// },
	// {
	// 	path: '/profile',
	// 	component: Profile,
	// 	layout: DashboardLayout,
	// },
];
