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
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            GlobalZone &nbsp;
            <span className='sm:block hidden'> | Goods impoter</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
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
            } nav-mobile p-6 absolute top-20 min-w-[140px] z-10`}
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
