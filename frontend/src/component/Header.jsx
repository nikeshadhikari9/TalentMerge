import React from 'react'
import { assets } from '../assets/assets'

const Header = () => (
    <section className='bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-2xl mx-4 my-6 overflow-hidden shadow-2xl'>
      <div className='container mx-auto px-6 lg:px-20'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left side */}
          <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-20'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight'>
              Empowering Innovation,
              <br />
              <span className='bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'>
                Crafting the Future
              </span>
            </h1>
            
            <div className='flex flex-col md:flex-row items-center gap-4 text-white'>
              <img className='w-28 rounded-lg shadow-md' src={assets.group_profiles} alt="Profiles" />
              <p className='text-lg opacity-90 leading-relaxed'>
                Simply browse through our profiles <br className='hidden sm:block' />
                and give us the feedback you want.
              </p>
            </div>
            
            <a 
              href="#about" 
              className='group flex items-center gap-3 bg-white px-8 py-4 rounded-full text-violet-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
            >
              Let's Start 
              <img className='w-4 group-hover:translate-x-1 transition-transform' src={assets.arrow_icon} alt="Arrow" />
            </a>
          </div>
          
          {/* Right side */}
          <div className='md:w-1/2 relative'>
            <img 
              className='w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500' 
              src={assets.header_img} 
              alt="Header"
            />
          </div>
        </div>
      </div>
    </section>
  );

export default Header
