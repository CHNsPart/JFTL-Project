//import styles from "../utils/index"
'use client';

import { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa"
import { FaLightbulb } from "react-icons/fa"

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToAbout() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 1000, behavior: 'smooth' });
}
function scrollToRole() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 2000, behavior: 'smooth' });
}
function scrollToNotes() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 3400, behavior: 'smooth' });
}
function scrollToFooter() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 6000, behavior: 'smooth' });
}


const NavBar = ({modeChange}) => {
  let [radioMode, setRadioMode] = useState("light")
  const setMode = () => {
    if(radioMode === "light"){
      setRadioMode("night")
      modeChange("night")
    }else{
      setRadioMode("light")
      modeChange("light")
    }
  }
  return (
    <div
      className={`bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 fixed py-10 flex justify-between items-center px-[2rem] bg-black text-white z-50 h-10 w-full`} mode={radioMode}
    >
      <h2 className="text-white text-2xl">JFTL</h2>
      <div className="flex justify-center items-center">
        <ul className="mr-5 text-lg uppercase">
          <li
            onClick={scrollToTop}
            className="inline-block mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
          >
            Home
          </li>
          <li
            onClick={scrollToAbout}
            className="inline-block mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
          >
            About
          </li>
          <li
            onClick={scrollToRole}
            className="inline-block mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
          >
            Role
          </li>
          <li
            onClick={scrollToNotes}
            className="inline-block mx-4 cursor-pointer hover:scale-110 hover:text-lightBrandBlue transition-all ease-in-out duration-200"
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
          <p 
            className="ml-5 text-lg font-semibold w-full flex justify-center items-center text-white"
            >
            <div className="">
              {
                radioMode === "light" ? 
                <FaLightbulb className="text-2xl" />
                : 
                <FaRegLightbulb className="text-2xl" />
              }
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
