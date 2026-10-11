import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full flex items-center p-3 sm:p-4 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97]">
      <div className="w-full flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain cursor-pointer"
          />
        </Link>

        {/* desktop */}
        <ul className="list-none hidden sm:flex flex-row gap-14 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-accentGreen' : 'text-accentPurple'
              } hover:text-accentGreen text-[21px] font-bold font-poppins 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite fixed inset-0 w-full h-screen z-50 flex flex-col justify-between menu ${
                toggle ? 'menu-open' : 'menu-close'
              }`}>
              <div className="flex items-center justify-between w-full pt-4 pb-2 px-2">
                <span className="text-accentPurple font-extrabold font-poppins text-[18px] uppercase tracking-widest opacity-70">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setToggle(false)}
                  className="w-11 h-11 rounded-full bg-accentPurple text-bgLight3 flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer"
                  aria-label="Close menu">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="list-none flex flex-col items-center justify-center flex-1 gap-7 -mt-6">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-accentGreen' : 'text-accentPurple'
                    } text-[26px] font-bold font-poppins uppercase tracking-[3px] cursor-pointer hover:text-accentGreen transition-colors`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
