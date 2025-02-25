import React, { useState, useEffect } from 'react';
import { logo } from "../../assets";

const Navbar2 = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    document.body.classList.toggle('nav-active', navActive);
  }, [navActive]);

  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    setNavActive(false); // Zamknięcie menu

    const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
}
  };
  

  const changeLanguage = (lang) => {
    console.log(`Zmiana języka na: ${lang}`);
    // Tu możesz dodać obsługę zmiany języka (np. przez context lub i18n)
  };

  return (
    <>
      <div className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <img src={logo} alt="logo" className="logo hover-target w-12 h-12 object-contain" />
            <a href="#" className="hover-target"><span>Global </span>Zone</a>
          </div>
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target" onClick={() => setNavActive(!navActive)}>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>					
          </div>
          <div className="languageflag-relative">
            <div className="languageFlag hover-target">
              <button className="first">
                <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#ffffff" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"></path>
                  <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path> 
                </svg>
              </button>
              <button className="second" onClick={() => changeLanguage('en')}>
                <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png" alt="EN" />
              </button>
              <button className="third" onClick={() => changeLanguage('pl')}>
                <img src="https://cdn.countryflags.com/thumbs/poland/flag-400.png" alt="PL" />
              </button>
            </div>
          </div>				
        </div>				
      </div>

      <div className={`nav ${navActive ? 'nav-active' : ''}`}>
        <div className="nav__content">
          <ul className="nav__list">
            {[
              { id: "home", label: "Strona główna" },
              { id: "products", label: "Produkty" },
              { id: "news", label: "Blog" },
              { id: "management", label: "Zarząd" },
              { id: "Kontakt", label: "Kontakt" }
            ].map(({ id, label }) => (
              <li key={id} className={`nav__list-item ${activeLink === id ? 'active-nav' : ''}`}>
                <a href={`#${id}`} className="hover-target" onClick={(e) => {
                  e.preventDefault(); // Zapobiega skakaniu strony
                  handleNavClick(id);
                }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>		

      <div className="cursor" id="cursor"></div>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor3" id="cursor3"></div>
    </>
  );
};

export default Navbar2;
