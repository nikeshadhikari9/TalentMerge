import React from 'react'
import { assets } from '../assets/assets'

const About = () => (
    <section id="about" className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            ABOUT <span className='text-violet-600'>US</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full'></div>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          <div className='lg:w-1/2'>
            <img 
              className='w-full max-w-md mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300' 
              src={assets.about_image} 
              alt="About us"
            />
          </div>
          
          <div className='lg:w-1/2 space-y-6'>
            <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <p className='text-gray-600 leading-relaxed text-lg mb-6'>
                We are passionate innovators dedicated to transforming ideas into reality. Our team combines creativity with cutting-edge technology to deliver exceptional solutions that make a difference.
              </p>
              <p className='text-gray-600 leading-relaxed text-lg mb-6'>
                With years of experience and a commitment to excellence, we strive to exceed expectations and build lasting partnerships with our clients.
              </p>
              <h3 className='text-2xl font-bold text-violet-600 mb-4'>Our Vision</h3>
              <p className='text-gray-600 leading-relaxed text-lg'>
                To be the catalyst for digital transformation, empowering businesses and individuals to achieve their full potential through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default About
