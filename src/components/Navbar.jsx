import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
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
        <div className="sm:hidden flex flex-1 w-full justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite fixed inset-0 w-full h-screen z-50 flex flex-col justify-between menu ${
                toggle ? 'menu-open' : 'menu-close'
              }`}>
              <div className="flex justify-end pt-2 pr-2">
                <img
                  src={close}
                  alt="close"
                  className="w-[28px] h-[28px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col items-center justify-center flex-1 gap-7 -mt-10">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-accentGreen' : 'text-accentPurple'
                    } text-[30px] font-bold font-poppins uppercase tracking-[3px] cursor-pointer hover:text-accentGreen transition-colors`}
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
