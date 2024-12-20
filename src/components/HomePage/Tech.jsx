import React from "react";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const Tech = () => {
  return (
    <>
          <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Zaufali nam.
        </p>
        <h2 className={`${styles.sectionHeadText} home-title text-center`}>
         Marki z którymi współpracujemy.
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-12 margin-top-100'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
