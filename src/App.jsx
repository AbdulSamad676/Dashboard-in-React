

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '../routs/root';
// import DashboardLayout from '../layouts/DashboardLayout';
// import AuthLayout from '../layouts/AuthLayout';
import { useSelector } from "react-redux";
const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
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
    </div>
  );
};

export default App;
