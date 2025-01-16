import React, { useState } from "react";
import Brykiet from "./Brykiet";
import Pellet from "./pellet";
import Ciastka from "./Ciastka";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import 'animate.css';
import { styles } from "../../styles";
function Cards() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <>
      <motion.div>
            <h2 className={`${styles.sectionHeadText} home-title text-center`}>
             Prezentacje naszych produktów.
            </h2>
      </motion.div>
      <div className='carrier-card-benefit-container'>
        <div className='carrier-card-benefit-buttons'>
          <a onClick={handleTab1} className={activeTab === "tab1" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">Brykiet</h4>
          </a>
          <a onClick={handleTab2} className={activeTab === "tab2" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">Pellet</h4>
          </a>
          <a onClick={handleTab3} className={activeTab === "tab3" ? "active" : "carrier-card-benefit-button"}>
            <h4 className="what-we-do-h4">Ciastka</h4>
          </a>
        </div>
      </div>
      <div className="carrier-benefit-container">
        <div className="carrier-card-benefit-container">
          {activeTab === "tab1" && <Brykiet />}
          {activeTab === "tab2" && <Pellet />}
          {activeTab === "tab3" && <Ciastka />}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Cards, "");
