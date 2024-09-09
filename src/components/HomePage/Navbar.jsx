import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close, logobrykiet } from "../../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex-col border-nav flex items-center fixed top-0 z-20 pt-2 ${
       !darkmode ? "bg-primary3" : "bg-primary2"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[15px] font-bold cursor-pointer flex '>
            GlobalZone | Goods impoter&nbsp;
          </p>
        </Link>

        <ul className='list-none relative right-[25px] hidden sm:flex flex-row gap-4'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        <label className="switch">
        <input
        onClick={() => setDarkmode(!darkmode)}
        type="checkbox"/>
        <span className="slider"></span>
      </label>

      <div className="languageflag-relative">
      <div className="languageFlag"><button className="first" >
        <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#ffffff" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <title id="languageIconTitle">
          Language
          </title> <circle cx="12" cy="12" r="10">
          </circle> <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z">
            </path> <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15">
              </path> 
              </g></svg>
              </button><button className="second" onClick={() => changeLanguage('en')} >
                <img src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png"/>
                </button><button className="third" onClick={() => changeLanguage('pl')}>
                  <img src="https://cdn.countryflags.com/thumbs/poland/flag-400.png"/></button>
                  </div>
      </div>

        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain r-[20px] mr-3'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } nav-mobile p-6 absolute top-12 min-w-[140px] z-10`}
          >
            <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <nav className="background-bottom-nav w-full">
      <div className="">
        <ul className="p-2 border-nav w-full flex items-center justify-center">
        <form class="form">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Znajdź ręcznie :)" required="" type="text"/>
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>
          <li>
          <Link to="">
      <div className="flex items-center justify-center h-10 w-32 p-2 m-1 flex">
        <div className="flex item-center justify-center">Brykiet</div>
        <ul className="dropdown-menu flex justify-center">
            <li className="flex flex-col items-center justify-center">
              <a>Brykiet Eco-Coco</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Brykiet Eco-Coco"/>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a>Pellet Eco-Fire</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Brykiet Pellet Eco-Fire"/>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a>Drewno Kominkowe</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Drewno Kominkowe"/>
            </li>
          </ul>
        <h3 className="m-1 flex item-center justify-center">↕</h3>
        </div>
        </Link>
          </li>
          <li>
          <Link to="">
        <div className="flex items-center justify-center h-10 w-32 p-2 m-1 flex">
        <div className="flex item-center justify-center">Spożywcze</div>
        <ul className="dropdown-menu flex justify-center">
            <li className="flex flex-col items-center justify-center">
              <a>Happy Cookies</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Brykiet Eco-Coco"/>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a>Soon..</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Brykiet Pellet Eco-Fire"/>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a>Soon..</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Drewno Kominkowe"/>
            </li>
          </ul>
        <h3 className="m-1 flex item-center justify-center">↕</h3>
        </div>
        </Link>
          </li>
          <li>
          <Link to="">
        <div className="flex items-center justify-center h-10 w-32 p-2 m-1 flex">
        <div className="flex item-center justify-center">Transport</div>
        <ul className="dropdown-menu flex justify-center">
            <li className="flex flex-col items-center justify-center">
              <a>Euro palety</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Brykiet Eco-Coco"/>
              <button>Sprawdź</button>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a>Soon..</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Brykiet Pellet Eco-Fire"/>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a>Soon..</a>
              <img className="h-32 w-32 mt-2" src={logobrykiet} alt="Drewno Kominkowe"/>
            </li>
          </ul>
        <h3 className="m-1 flex item-center justify-center">↕</h3>
        </div>
        </Link>
          </li>
        </ul>
      </div>
      </nav>
      {/* <div className="what-we-do-swipe">
        <p>Swipe</p>
      </div> */}
    </nav>
  );
};

export default Navbar;
