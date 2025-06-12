import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-violet-600 to-purple-700 shadow-lg backdrop-blur-md'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex items-center justify-between'>
          
          {/* Logo */}
          <img 
            onClick={() => navigate('/')} 
            className='h-10 cursor-pointer transition-transform hover:scale-105' 
            src={assets.logo} 
            alt="Logo" 
          />
          
          {/* Right side desktop actions */}
          <div className='flex items-center gap-4'>
            <button 
              onClick={() => navigate('/login')} 
              className='bg-white text-violet-700 px-6 py-2 rounded-full font-medium hidden md:block hover:bg-gray-100 hover:shadow-md transition-all duration-300 transform hover:scale-105'
            >
              Create Account
            </button>
            <img 
              onClick={() => setShowMenu(true)} 
              className='w-6 md:hidden cursor-pointer' 
              src={assets.menu_icon} 
              alt="Menu" 
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${showMenu ? "fixed top-0 left-0 w-full h-full bg-white z-20 transition-all" : "hidden"}`}>
        <div className="flex items-center justify-between px-5 py-6 bg-gradient-to-r from-violet-600 to-purple-700">
          <img className="h-8" src={assets.logo} alt="Logo" />
          <img
            className="w-7 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="px-5 py-4">
          <button 
            onClick={() => navigate('/login')} 
            className='w-full bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition-all duration-300'
          >
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
