import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas} from "./";
import React from 'react'
import Footer from "./Footer";
import Brykiet from "./Brykiet";

const HomePage = () => {
  return (
    <div className='relative z-0 bg-primary-dark'>
      <div className="background-blur"></div>
      <div className="background-blur2"></div>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Brykiet />
      <Tech />
      {/* <Blog /> */}
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}
export default HomePage;
