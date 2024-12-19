import React from "react";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import Brykiet2 from '../../assets/Brykiet2.png'

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <>
          {/* <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Nowość.
        </p>
        <h2 className={`${styles.sectionHeadText} home-title text-center`}>
         Najbardziej sprzedający się produkt.
        </h2>
      </motion.div>
      <div className='brykiet-container mx-auto '>
        <img className='brykiet-image' src={Brykiet2} alt='Background'/>
      </div> */}
    </>
  );
};

export default SectionWrapper(Tech, "");
