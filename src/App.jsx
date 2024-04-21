// // import { useState } from 'react';
// // import React from 'react';
// // import LoginPage from './pages/LoginPage';
// // import { Outlet } from 'react-router-dom';
// // import {
// // 	faHtml5,
// // 	faCss3,
// // 	faBootstrap,
// // 	faReact,
// // } from '@fortawesome/free-brands-svg-icons';
// // import Sidebar from './components/Sidebar';
// // import Header from './components/Header';

// // function App() {
// // 	return (
// // 		<>
// // 			<div className='grid grid-cols-12'>
// // 				<Sidebar />
// // 				<Header />
// // 				<Outlet />
// // 			</div>
// // 		</>
// // 	);
// // }

// // export default App;
// import React, { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { routesConfig } from '../routs/root';

// // import './App.css';
// // import { routesConfig } from '';

// const App = () => {
// 	return (
// 		<Routes>
// 			{routesConfig.map(route => (
// 				<Route
// 					key={route.path}
// 					path={route.path}
// 					element={
// 						<route.layout>
// 							<route.component />
// 						</route.layout>
// 					}
// 				/>
// 			))}
// 		</Routes>
// 	);
// };

// export default App;
// App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '../routs/root';
// import DashboardLayout from '../layouts/DashboardLayout';
// import AuthLayout from '../layouts/AuthLayout';

const App = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <route.layout title={route.path}>
              <route.component />
            </route.layout>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
