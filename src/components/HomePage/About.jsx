import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[300px] w-90'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r  to-white-500 p-[1px] rounded-[20px] shadow-card-blue'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='background-dark rounded-[20px] py-5 px-12 min-h-[300px] max-h-[300px] max-w-[300px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='product-img object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <section id="products">
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Produkty i prezentacje</p>
            <h2 className={styles.sectionHeadText}>Nasze produkty</h2>
          </motion.div>

          <div className='justify-center mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
    </section>
      
    </>
  );
};

export default SectionWrapper(About, "about");
