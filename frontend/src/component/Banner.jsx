import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <div className='bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl shadow-2xl overflow-hidden'>
          <div className='flex flex-col md:flex-row items-center'>
            {/* Left side */}
            <div className='flex-1 py-12 px-8 md:px-12 lg:px-16'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                Create Account
                <br />
                <span className='text-yellow-300'>To stay connected!</span>
              </h2>
              <button 
                onClick={() => navigate('/login')} 
                className='bg-white text-violet-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
              >
                SignUp Now
              </button>
            </div>
            
            {/* Right side */}
            <div className='hidden md:block md:w-1/2 lg:w-auto relative'>
              <img 
                className='w-full max-w-sm xl:max-w-md h-auto' 
                src={assets.header_img} 
                alt="Join us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default Banner
