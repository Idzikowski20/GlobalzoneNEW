import React from "react";
import { motion } from "framer-motion";
import  Janek  from "../../assets/Janek.png"
import  Pawel  from "../../assets/Pawel.png"
import { styles } from "../../styles";
import  {SectionWrapper}  from "../../hoc";
import { textVariant } from "../../utils/motion";
import Navbaricons from "./Navbaricons";
import email from "../../assets/email.png"

const Feedbacks = () => {
  return (
    <section id="management">
      <div className={`mt-12`}>
        <div
          className={` rounded-2xl ${styles.padding}`}
        >
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} home-title text-center`}>
          Zarząd Global Zone
          </h2>
        </motion.div>
        </div>
        <div className="team-container rounded-[20px]">
      <div className="team-members">
        <div className="member">
          <img className="member-image" src={Pawel}/>
          <h2 className="member-name">Paweł Klejnowski</h2>
          <span className="member-role">Prezes Zarządu</span>
          <p className="member-desc">Od lat związany z branżą transportową, gdzie z pasją rozwija swoje kompetencje. <br></br><br></br>

          Specjalizuje się w logistyce, zarządzaniu przewozami i optymalizacji procesów – to dziedziny, w których liczą się zarówno precyzja, jak i umiejętność szybkiego reagowania na zmieniające się warunki.<br></br><br></br>

          Wierzy, że skuteczne zarządzanie transportem to nieustanne szukanie lepszych rozwiązań i optymalizacja, która przekłada się na realne korzyści dla firm i klientów.</p>
        </div>
        <div className="member">
          <img className="member-image" src={Janek}/>
          <h2 className="member-name">Jan Śliwa</h2>
          <span className="member-role">Członek Zarządu</span>
          <p className="member-desc">Przez długi czas działa w branży usługowo-handlowej, gdzie zdobył doświadczenie, które dziś pozwala mu skutecznie przewidywać trendy i wdrażać nowatorskie rozwiązania. <br></br><br></br> Specjalizuje się w rynku niemieckim, dzięki czemu doskonale rozumie jego specyfikę i potrzeby klientów.

          W ostatnich latach skupił się na branży finansowej, gdzie łączył analityczne podejście z indywidualnym podejściem do klientów. <br></br><br></br>

          Jego celem jest nie tylko skuteczność, ale także budowanie długotrwałych relacji opartych na zaufaniu i wspólnym sukcesie.</p>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
