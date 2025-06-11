import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
  
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
    
    <div className='flex flex-col justify-center my-10 md:flex-row gap-10 mb-28 text-sm'>

        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Info</p>
          <p className='text-gray-500'>DMC CodeStorm<br/>Jhapa</p>
          <p className='text-gray-500'>Phone: 9825396176 <br/> Email: bcaassociaion-dmc@gmail.com</p>
          <p className='text-gray-500'>Learn more about our teams and upcoming events.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-violet-700 hover:text-white transition-all duration-500'>Explore Events</button>
        </div>

    </div>
    </div>
  )
}

export default Contact
