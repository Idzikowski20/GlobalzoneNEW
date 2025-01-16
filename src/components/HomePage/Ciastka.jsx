import React from "react";
import { useState } from "react";
import { SectionWrapper } from "../../hoc";
import cookies1 from '../../assets/10.png'
import cookies2 from '../../assets/11.png'
import cookies3 from '../../assets/12.png'
import cookies4 from '../../assets/13.png'
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
          {active ? " ZAMKNIJ ✖️" : "✔️ OTWÓRZ PREZENTACJE ✔️"}
        </button>
      </div>

      <div className={`${active ? "open-container" : "hidden-container"}`}>
        {[cookies2, cookies3, cookies4].map(
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
