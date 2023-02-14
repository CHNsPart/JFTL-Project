import React from 'react';
import Image from 'next/image';
import map from '../../public/JFTL-Map.png';
import { GiBurningForest } from 'react-icons/gi';

const About = () => {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
      <h1 className="pt-32 text-7xl w-full text-center text-bold font-black text-brandBlue">
        About Us
      </h1>
      <div className="h-full flex justify-center items-center w-full snap snap-y">
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
              <GiBurningForest size={30} className="text-brandBlue" />
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Explore the Beauty and Delicacy of Bangladeshi Seafood from the
            mother nature, the Sundarbans Mangrove Forest (the largest mangrove
            forest of the world and a UNESCO world heritage)
          </p>
          <div className="w-[30rem] px-10">
            <button
              className={`bg-gradient-to-r from-lightBrandBlue to-darkBrandBlue w-48 h-16 rounded-full text-white text-lg tracking-wider mt-5`}
            >
              Know More
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <Image src={map} height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default About;
