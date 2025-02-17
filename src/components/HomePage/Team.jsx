import React from "react";
import { motion } from "framer-motion";
import  Janek  from "../../assets/Janek.png"
import  Pawel  from "../../assets/Pawel.png"
import { styles } from "../../styles";
import  {SectionWrapper}  from "../../hoc";
import { textVariant } from "../../utils/motion";


const Feedbacks = () => {
  return (
    <div className={`mt-12`}>
      <div
        className={` rounded-2xl ${styles.padding}`}
      >
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} home-title text-center`}>
         Zarząd Global Zone.
        </h2>
      </motion.div>
      </div>
      <div className="team-container rounded-[20px]">
    <div className="team-members">
      <div className="member">
        <img className="member-image" src={Pawel}/>
        <h2 className="member-name">Paweł Klejnowski</h2>
        <span className="member-role">Prezes Zarządu</span>
        <p className="member-desc">Paweł Klejnowski to doświadczony specjalista od lat związany z branżą transportową, gdzie z pasją i zaangażowaniem rozwija swoje kompetencje.
          Jego wiedza i doświadczenie w logistyce, zarządzaniu przewozami i optymalizacji procesów sprawiają, że jest cenionym ekspertem w swoim środowisku zawodowym. <br></br><br></br>
          Jego połączenie profesjonalizmu w pracy oraz zamiłowania do sportu sprawia, że Paweł inspiruje zarówno w środowisku zawodowym, jak i prywatnym.<br></br><br></br>
          Poza życiem zawodowym Paweł jest oddanym miłośnikiem sportu, a szczególnie piłki nożnej. 
          </p>
      </div>
      <div className="member">
        <img className="member-image" src={Janek}/>
        <h2 className="member-name">Jan Śliwa</h2>
        <span className="member-role">Członek Zarządu</span>
        <p className="member-desc">Jan Śliwa to doświadczony profesjonalista od lat związany z branżą usługowo-handlową. 
          Dzięki swojej wiedzy i wytrwałości stał się cenionym specjalistą oraz ekspertem w zakresie rynku niemieckiego.<br></br><br></br> W ostatnich latach aktywnie działa w branży finansowej, gdzie z powodzeniem łączy znajomość międzynarodowych trendów z indywidualnym podejściem do klientów. 
          Jego umiejętność analizy rynku oraz skutecznego wdrażania innowacyjnych rozwiązań sprawia, że cieszy się dużym uznaniem w swoim środowisku zawodowym. <br></br><br></br>
          Prywatnie Jan jest pasjonatem motoryzacji i gotowania.</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
