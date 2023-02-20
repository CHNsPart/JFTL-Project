//import styles from "../utils/index"
'use client';

import { useState } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa';
import logo from "../public/JFTLLogo.jpg"
import Image from 'next/image';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToAbout() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 800, behavior: 'smooth' });
}
function scrollToLoc() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 2500, behavior: 'smooth' });
}
function scrollToNotes() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 4600, behavior: 'smooth' });
}
function scrollToFooter() {
  if (!isBrowser()) return;
  window.scrollTo({ top: "40000", behavior: 'smooth' });
}

const NavBar = ({ modeChange }) => {
  let [radioMode, setRadioMode] = useState('light');
  const setMode = () => {
    if (radioMode === 'light') {
      setRadioMode('night');
      modeChange('night');
    } else {
      setRadioMode('light');
      modeChange('light');
    }
  };
  return (
    <div
      className={`bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 fixed py-10 flex justify-between items-center px-[2rem] bg-black text-white z-50 h-10 w-full`}
      mode={radioMode}
    >
      <h2 className="text-white text-2xl">
        <Image src={logo} height={80} width={80} />
      </h2>
      <div className="flex justify-center items-center">
        <ul className="mr-5 text-lg uppercase">
          <li
            onClick={scrollToTop}
            className="inline-block md:text-md mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
          >
            Home
          </li>
          <li
            onClick={scrollToAbout}
            className="inline-block md:text-md mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
          >
            About
          </li>
          <li
            onClick={scrollToLoc}
            className="inline-block md:text-md mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
          >
            Location
          </li>
          <li
            onClick={scrollToNotes}
            className="inline-block md:text-md mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
          >
            Short Notes
          </li>
        </ul>
        <button
          onClick={scrollToFooter}
          className={`bg-gradient-to-r from-lightBrandBlue to-darkBrandBlue w-32 tracking-wider h-10 rounded-full`}
        >
          Contact Us
        </button>
        <div className="h-10 w-24 ml-5 flex flex-row justify-between items-center">
          <input onClick={setMode} type="checkbox" className="toggle" />
          <div className="ml-5 text-lg font-semibold w-full flex justify-center items-center text-white">
            <div className="">
              {radioMode === 'light' ? (
                <FaLightbulb className="text-2xl" />
              ) : (
                <FaRegLightbulb className="text-2xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
