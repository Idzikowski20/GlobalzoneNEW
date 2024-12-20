import React from "react";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import Brykiet1 from '../../assets/1.png'
import Brykiet2 from '../../assets/2.png'
import Brykiet3 from '../../assets/3.png'
import Brykiet4 from '../../assets/4.png'
import Brykiet5 from '../../assets/5.png'
import Brykiet6 from '../../assets/6.png'
import Brykiet7 from '../../assets/7.png'
import Brykiet8 from '../../assets/8.png'
import Brykiet9 from '../../assets/9.png'
import Brykiet10 from '../../assets/10.png'
import Brykiet11 from '../../assets/11.png'
import Brykiet12 from '../../assets/12.png'
import Brykiet13 from '../../assets/13.png'

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
// import { textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <>
          <motion.div>
        <p className={`${styles.sectionSubText} text-center`}>
          Nowość.
        </p>
        <h2 className={`${styles.sectionHeadText} home-title text-center`}>
         Najbardziej sprzedający się produkt.
        </h2>
      </motion.div>
      <div className="brykiet-container">
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image-top' src={Brykiet1} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet2} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet3} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet4} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet5} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet6} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet7} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet8} alt='Background'/>
          </div>
          <div className='brykiet-card mx-auto '>
            <img className='brykiet-image' src={Brykiet9} alt='Background'/>
          </div>
      </div>
       <div className="brykiet-container">
            <div className='brykiet-card mx-auto '>
              <img className='brykiet-image' src={Brykiet10} alt='Background'/>
            </div>
            <div className='brykiet-card mx-auto '>
              <img className='brykiet-image' src={Brykiet11} alt='Background'/>
            </div>
            <div className='brykiet-card mx-auto '>
              <img className='brykiet-image' src={Brykiet12} alt='Background'/>
            </div>
            <div className='brykiet-card mx-auto '>
              <img className='brykiet-image-bottom' src={Brykiet13} alt='Background'/>
            </div>
        </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
