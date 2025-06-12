import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import About from '../component/About'
import Contact from '../component/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Banner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
