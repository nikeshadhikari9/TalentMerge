import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import UserDashboard from './pages/userDashboard';
import OrganizationDashboard from './pages/organizationDashboard';
import Roadmap from './pages/Roadmap';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/road-map" element={<Roadmap />} />
          <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
         
        </Routes>
      </main>
    </div>
    
  );
};

export default App;
