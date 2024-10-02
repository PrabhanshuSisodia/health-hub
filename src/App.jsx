// import React from 'react'
import AboutUs from './components/AboutUs'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WhyChoose from './components/WhyChoose'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <AboutUs />
    </div>
  )
}

export default App
