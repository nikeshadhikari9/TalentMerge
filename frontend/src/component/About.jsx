import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, maxime alias consequatur iusto voluptates praesentium velit soluta! Nam aliquam ducimus molestias, omnis quidem cum dolor minus commodi sit laboriosam maiores!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim, esse nihil quisquam porro fuga aut laborum harum autem itaque recusandae magni fugiat deleniti, quam ut! Vel sapiente iure dicta!</p>
          <b className='text-gray-500'>Our Vision</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolorem, qui illo enim aliquid itaque iste numquam? Itaque, quam facilis in ab, eius, libero optio iste unde vel voluptatem soluta!</p>
        </div>
      </div>
    </div>
  )
}

export default About
