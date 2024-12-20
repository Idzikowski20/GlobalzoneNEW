import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { EarthCanvas } from "../canvas/";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

function Contact() {

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_aa2zuku','template_ul0xvip', e.target,'clFOhYT1S9lZI6-ck')
    .then(
      () => {
        setLoading(false);
        alert("Dziękuje za wiadomość, odpowiemy tak szybko jak potrafimy :)");
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Coś poszło nie tak. Sprawdź jeszcze raz.");
      }
    );
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Masz sprawę?</p>
        <h3 className={styles.sectionHeadText}>Kontakt.</h3>

        <form
          onSubmit={sendEmail}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Twój e-mail</span>
            <input
              type='email'
              name='email_from'
              placeholder="Podaj proszę e-mail na który ma odpowiedzieć"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Twoja wiadomość</span>
            <textarea
              rows={7}
              name='message'
              id="message"
              placeholder='W jakim sprawie potrzebujesz kontaktu?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            variants='contained'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
          {loading ? "Wysyłanie..." : "Wyślij"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
