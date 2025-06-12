import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import UserDashboard from './pages/userDashboard';
import OrganizationDashboard from './pages/organizationDashboard';
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <UserDashboard/>
      <OrganizationDashboard/>
      {/* <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/login" element={<Login />} />
      </Routes>  */}
    </div>
  );
};

export default App;
