import React, { Suspense } from "react";
import { styles } from "../../styles";
import Spline from '@splinetool/react-spline';
import Button from "./Button";
import CanvasLoader from "../HomePage/Loader";
import Navbaricons from "./Navbaricons";
import { StarsCanvas } from "../canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <StarsCanvas />
      <div
        className={`mobile-hero pt-10 absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gradient' />
          <div className='w-1 sm:h-80 h-40 bg-gradient' />
        </div>


        <div className="w-21">
          <h1 className={`${styles.heroHeadText} hero-h1 text-white`}>
            Global <span className='hero-span'>Zone</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Stawiamy na ekologię!<br className='sm:block hidden' />
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Jesteśmy firmą importującą najwyższej jakości towar, <br>
            </br>który jest w 100% ekologiczny dla planety.
          </p>
          <br></br>
          <br></br>
          <div className="sideinfo-container">
          <Button/>
          <Navbaricons/>
          </div>
        </div>
      </div>
      <Suspense fallback={<CanvasLoader />}>
      <Spline scene="https://prod.spline.design/rNKQ4evbTav4znyU/scene.splinecode" />
      </Suspense>
    </section>
  );
};

export default Hero;
