import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => (
    <footer className='bg-gradient-to-r from-violet-700 to-purple-800 rounded-2xl mx-4 mb-6'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Left part */}
          <div className='md:col-span-1'>
            <img className='h-12 mb-6' src={assets.logo} alt="Logo" />
            <p className='text-white/90 leading-relaxed text-lg'>
              Empowering innovation and crafting the future through cutting-edge technology solutions and creative excellence.
            </p>
          </div>
          
          {/* Middle part */}
          <div>
            <h3 className='text-xl font-bold mb-6 text-white'>CoderStorm</h3>
            <ul className='space-y-3'>
              {['Home', 'About us', 'Contact us', 'Privacy policy'].map((item, index) => (
                <li key={index}>
                  <a href="#" className='text-white/80 hover:text-yellow-300 transition-colors duration-300 hover:underline'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right part */}
          <div>
            <h3 className='text-xl font-bold mb-6 text-white'>GET IN TOUCH</h3>
            <ul className='space-y-3'>
              <li className='text-white/80'>📞 9825396176</li>
              <li className='text-white/80'>✉️ poudelrojan05@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <hr className='border-white/30 mb-6' />
        <p className='text-center text-white/80'>
          Copyright 2025 © DMCCodeStorm - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
export default Footer
