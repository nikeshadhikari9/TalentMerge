import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  useEffect(() => {
    API.get("/auth/is-loggedIn")
      .then((res) => {
        setIsWorking(res.data.isWorking);
      })
      .catch((err) => {
        console.error("Error:", err);
        setIsWorking(false);
      });
  }, []);

  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b  border-b-gray-400 bg-violet-700 rounded-lg'>
      <img onClick={() => navigate('/')} className='w-27 cursor-pointer' src={assets.logo} alt="" />
     
      <div className='flex items-center gap-3'>
        {/* {
          token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-stone-700 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-blue-300 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
            : 
        } */}
        <button onClick={() => navigate('/login')} className='bg-white text-violet-700 px-8 py-3 rounded-full font-light hidden md:block hover:bg-stone-200 mx-2 '>Create Account</button>
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* mobile menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6 bg-violet-700">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 px-5 text-lg font-medium mb-10 bg-violet-700 text-white">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
