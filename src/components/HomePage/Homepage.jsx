import { About, Contact, Experience, Hero, StarsCanvas, Team, Cards, Blog } from "./";
import React, { useEffect, useRef } from 'react';
import Footer from "./Footer";

const HomePage = () => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  const cursor3Ref = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursor2 = cursor2Ref.current;
    const cursor3 = cursor3Ref.current;
    const hoverTargets = document.querySelectorAll(".hover-target");

    if (!cursor || !cursor2 || !cursor3) return;

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor2.style.left = `${event.clientX}px`;
      cursor2.style.top = `${event.clientY}px`;
      cursor3.style.left = `${event.clientX}px`;
      cursor3.style.top = `${event.clientY}px`;
    };

    document.body.addEventListener("mousemove", moveCursor);

    const addHover = () => {
      cursor2.classList.add("hover");
      cursor3.classList.add("hover");
    };

    const removeHover = () => {
      cursor2.classList.remove("hover");
      cursor3.classList.remove("hover");
    };

    hoverTargets.forEach(target => {
      target.addEventListener("mouseover", addHover);
      target.addEventListener("mouseout", removeHover);
    });

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach(target => {
        target.removeEventListener("mouseover", addHover);
        target.removeEventListener("mouseout", removeHover);
      });
    };
  }, []);

  return (
    <div className='selector relative z-0 bg-primary-dark'>
      <Hero />
      <Experience />
      <About />
      <Cards />
      <Blog />
      <Team />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
