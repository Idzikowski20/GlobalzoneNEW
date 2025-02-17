import React, { useState } from "react";
import { SectionWrapper } from "../../hoc";
import pellet1 from '../../assets/pellet1.png';
import pellet2 from '../../assets/pellet2.png';
import pellet3 from '../../assets/pellet3.png';
import pellet4 from '../../assets/pellet4.png';
import pellet5 from '../../assets/pellet5.png';
import pellet6 from '../../assets/pellet6.png';
import pellet7 from '../../assets/pellet7.png';
import pellet8 from '../../assets/pellet8.png';
import 'animate.css';
import "react-vertical-timeline-component/style.min.css";

const Tech = () => {
  const [active, setActive] = useState(false); // Zmieniono typ stanu na `boolean`

  const togglePresentation = () => {
    setActive((prevActive) => !prevActive); // Przełączanie stanu
  };

  return (
    <div className="brykiet-container">
      <div className="brykiet-card mx-auto">
        <img
          className="brykiet-image-top animate__animated animate__backInLeft"
          src={pellet1}
          alt="Background"
        />
      </div>

      <div>
        <button
          className="button-rozwin hover-underline "
          onClick={togglePresentation}
        >
          {active ? "✖️ZAMKNIJ" : "✔️ OTWÓRZ PREZENTACJE"}
        </button>
      </div>

      <div className={`${active ? "open-container" : "hidden-container"}`}>
        {[pellet2, pellet3, pellet4, pellet5, pellet6, pellet7, pellet8].map(
          (image, index) => (
            <div key={index} className="brykiet-card mx-auto">
              <img
                className="brykiet-image animate__animated animate__fadeInDownBig"
                src={image}
                alt={`Background ${index + 2}`}
              />
            </div>
          )
        )}
      </div>
      <div>
        <button
          className="button-rozwin hover-underline "
          onClick={togglePresentation}
        >
          {active ? "ZAMKNIJ ✖️" : ""}
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
