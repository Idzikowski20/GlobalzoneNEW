import React from "react";
import { useState } from "react";
import { SectionWrapper } from "../../hoc";
import cookies1 from '../../assets/Slajd 1.webp'
import cookies4 from '../../assets/Slajd 4.webp'
import cookies5 from '../../assets/Slajd 5.webp'
import cookies6 from '../../assets/Slajd 6.webp'
import cookies7 from '../../assets/Slajd 7.webp'
import cookies8 from '../../assets/Slajd 8.webp'
import cookies9 from '../../assets/Slajd 9.webp'
import cookies10 from '../../assets/Slajd 10.webp'
import cookies11 from '../../assets/Slajd 11.webp'
import cookies14 from '../../assets/Slajd 14.webp'
import "react-vertical-timeline-component/style.min.css";
import 'animate.css';
// import { textVariant } from "../../utils/motion";


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
          src={cookies1}
          alt="Background"
        />
      </div>

      <div>
        <button
          className="button-rozwin hover-underline "
          onClick={togglePresentation}
        >
          {active ? "✖️ ZAMKNIJ" : "✔️ OTWÓRZ PREZENTACJE"}
        </button>
      </div>

      <div className={`${active ? "open-container" : "hidden-container"}`}>
        {[cookies4,cookies5,cookies6,cookies7,cookies8,cookies9,cookies10,cookies11,cookies14].map(
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
