import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { shiplogistic, shiplogistic2 } from "../../assets";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Poznaj nas.
        </p>
        <h2 className={`${styles.sectionHeadText} home-title text-center`}>
         Kim jesteśmy i czym się zajmujemy?
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <div className="aboutus-card-container">
        <div className="aboutus-card">

          <div className="w-[100%]">
          </div>
        <div className="w-[100%]">
        <p className="aboutus-subtitle w-[100%]">Specjalizujemy się w imporcie i wprowadzaniu na rynek nowych, ciekawych produktów. Kładziemy szczególny nacisk na ekologię, 
          innowacyjność, a przede wszystkim jakość i ciekawą alternatywę dla innych podobnych produktów obecnych na rynku polskim.</p>
        </div>

        </div>
        <div className="aboutus-card-img">
        <img className="" src={shiplogistic} alt="Brykiet Eco-Coco"/>
        </div>
        </div>
        <div className="aboutus-card-container-mirror">
        <div className="aboutus-card">
        
        <div className="w-[100%]">
          </div>
        <div className="w-[100%]">
        <p className="aboutus-subtitle w-[100%]">W naszej ofercie znajdą Państwo zarówno Brykiet do grilla, drewno kominkowe, pelet ale również ciastka. Ta szalenie zróżnicowana Paleta produktów dowodzi tylko jak elastycznym i uniwersalnym partnerem biznesowym jesteśmy. Współpracujemy z certyfikowanymi producentami artykułów codziennego użytku
          produkowanych poza Polską jak i od rodzimych producentów.</p>
        </div>

        </div>
        <div className="aboutus-card-img">
        <img className="" src={shiplogistic2} alt="Brykiet Eco-Coco"/>
        </div>
        </div>
        {/* <div className="aboutus-card-container">
        <div className="aboutus-card">
        <p>aaaaaaaaaaaa</p>
        </div>
        <div className="aboutus-card-img">
        <img className="" src={shiplogistic} alt="Brykiet Eco-Coco"/>
        </div>
        </div> */}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
