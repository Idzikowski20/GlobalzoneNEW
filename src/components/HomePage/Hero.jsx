import { motion } from "framer-motion";
import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import Spline from '@splinetool/react-spline';
import Button from "./Button";
import { EarthCanvas } from "../canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`mobile-hero pt-10 absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="w-21">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Global<span className='text-[#915EFF]'>Zone</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Stawiamy na ekologię!<br className='sm:block hidden' />
            Jesteśmy firmą importującą najwyższej jakości towar, <br>
            </br>który jest w 100% ekologiczny dla planety.
          </p>
          <br></br>
          <br></br>
          <Button/>
        </div>
      </div>
      <Spline scene="https://prod.spline.design/rNKQ4evbTav4znyU/scene.splinecode" />
    </section>
  );
};

export default Hero;
