import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import About from '../component/About'
import Contact from '../component/Contact'
import ChatBot from '../component/ChatBot'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="min-h-screen bg-gray-50 mx-4 px-4 mt-2" >
      <Navbar />
      <Header />
      <About/>
      <Banner/>
      <Contact/>
      <Footer/>
    </div>
    </div>
  )
}

export default Home
