import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./";
import React from 'react'

const HomePage = () => {
  return (
    <div className='relative z-0 bg-primary-dark'>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}
export default HomePage;
