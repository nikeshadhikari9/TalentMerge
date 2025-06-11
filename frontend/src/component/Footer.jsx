import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-violet-700 rounded-xl px-4'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ---------- left part-------- */}
        <div>
           <img className='mb-5 w-30 mt-1' src={assets.logo} alt="" />
           <p className='w-full md:w-2/3 text-white leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nulla distinctio accusamus earum, omnis sint ut numquam quas tempora aperiam. Placeat eos quaerat architecto quae.</p>
        </div>
        {/* ---------- mid part-------- */}
        <div className='mt-3'>
              <p className='text-xl font-medium mb-5 text-white'>CoderStorm</p>
              <ul className='flex flex-col gap-2 text-white'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
              </ul>
        </div>
        {/* ---------- right part-------- */}
        <div className='mt-3'>
            <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-white'>
                <li>9825396176</li>
                <li>poudelrojan05@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* -------- copy right text-------- */}
        <hr className='border-white' />
        <p className='py-5 text-sm text-center text-white'>Copyright 2025@ DMCCodeStorm - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
