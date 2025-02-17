import React, { useState } from "react";
import { SectionWrapper } from "../../hoc";
import Brykiet1 from '../../assets/1.png';
import Brykiet2 from '../../assets/2.png';
import Brykiet3 from '../../assets/3.png';
import Brykiet4 from '../../assets/4.png';
import Brykiet5 from '../../assets/5.png';
import Brykiet6 from '../../assets/6.png';
import Brykiet7 from '../../assets/7.png';
import Brykiet8 from '../../assets/8.png';
import Brykiet9 from '../../assets/9.png';
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
          src={Brykiet1}
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
        {[Brykiet2, Brykiet3, Brykiet4, Brykiet5, Brykiet6, Brykiet7, Brykiet8, Brykiet9].map(
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
