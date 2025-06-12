import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            CONTACT <span className='text-violet-600'>US</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full'></div>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='lg:w-1/2'>
            <img 
              className='w-full max-w-md mx-auto rounded-2xl shadow-xl' 
              src={assets.contact_image} 
              alt="Contact us"
            />
          </div>
          
          <div className='lg:w-1/2'>
            <div className='bg-white p-8 rounded-2xl shadow-xl'>
              <h3 className='text-2xl font-bold text-violet-600 mb-6'>Our Info</h3>
              
              <div className='space-y-4 mb-8'>
                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mt-1'>
                    <div className='w-2 h-2 bg-violet-600 rounded-full'></div>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-800'>Address</p>
                    <p className='text-gray-600'>DMC CodeStorm, Jhapa</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-3'>
                  <div className='w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mt-1'>
                    <div className='w-2 h-2 bg-violet-600 rounded-full'></div>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-800'>Contact</p>
                    <p className='text-gray-600'>Phone: 9825396176</p>
                    <p className='text-gray-600'>Email: dmccoderstorm@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <p className='text-gray-600 mb-6 leading-relaxed'>
                Learn more about our teams and upcoming events. We're always excited to connect with new people!
              </p>
              
              <button className='bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default Contact
