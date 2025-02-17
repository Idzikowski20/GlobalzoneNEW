import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { logo, menu, close} from "../../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [darkmode, setDarkmode] = useState(false);


  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex-col border-nav flex items-center fixed top-0 z-20 pt-2 z-index 10 ${
       !darkmode ? "bg-primary2" : "bg-primary3"
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
            Global Zone | Goods impoter&nbsp;
          </p>
        </Link>

        <ul className='list-none relative right-[25px] hidden sm:flex flex-row gap-4'>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
            window.scrollTo(0, 700);
          }} href="#">Nasze marki</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
            window.scrollTo(0, 1500);
          }} href="#">O nas</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
            window.scrollTo(2500, 2500);
          }} href="#">Prezentacje produktów</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
            window.scrollTo(0, 5300);
          }} href="#">Zespół</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
            window.scrollTo(0, 6400);
          }} href="#">Kontakt</a>
            </li>
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
            <ul className={`list-none flex justify-center items-center flex-1 flex-col gap-9 font-poppins font-large cursor-pointer text-[25px] ${
                    active ? "text-white" : "text-secondary"
                  } `}>
                <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
                setToggle(!toggle);
            window.scrollTo(0, 650);
          }} href="#">Nasze marki</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
                setToggle(!toggle);
            window.scrollTo(0, 2150);
          }} href="#">O nas</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
                setToggle(!toggle);
            window.scrollTo(2500, 3750);
          }} href="#">Prezentacje produktów</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
                setToggle(!toggle);
            window.scrollTo(0, 5450);
          }} href="#">Zespół</a>
            </li>
            <li className="hover:text-white font-medium cursor-pointer flex justify-center aligh-center text-center">
              <a onClick={() => {
                setToggle(!toggle);
            window.scrollTo(0, 8200);
          }} href="#">Kontakt</a>
            </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="what-we-do-swipe">
        <p>Swipe</p>
      </div> */}
    </nav>
  );
};

export default Navbar;
