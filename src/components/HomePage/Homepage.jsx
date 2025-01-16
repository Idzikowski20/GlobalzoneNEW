import { About, Contact, Experience, Hero, StarsCanvas,Navbar,Team, Cards} from "./";
import React from 'react'
import Footer from "./Footer";

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
      <Cards />
      {/* <Tech /> */}
      {/* <Blog /> */}
      <Team />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}
export default HomePage;
