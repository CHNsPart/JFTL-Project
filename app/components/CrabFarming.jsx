import React from 'react';
import Image from 'next/image';
import softShell from '../../public/softshell.png';
import softShell2 from '../../public/softshell2.png';
import { GiCatch, GiCrab, GiFarmer } from 'react-icons/gi';

const CrabFarming = () => {
  return (
    <div className="min-h-screen my-16 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
      <div className='w-full flex flex-row justify-center items-center opacity-20 gap-10'>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
      </div>
      <h1 className="text-7xl mt-10 w-full text-center text-bold font-black text-brandBlue">
        JFTL SOFT SHELL CRAB FARMING
      </h1>
      
      <div className="w-full h-auto flex flex-row justify-center my-20 lg:px-10">
        <div className="grid grid-cols-4 gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover rounded-l-full w-full border transition-all duration-300 ease-in-out" src={softShell} />
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover rounded-t-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={softShell} />
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover rounded-b-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={softShell} />
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover  w-full border transition-all duration-300 ease-in-out rounded-r-full" src={softShell} />
        </div>
      </div>

      <div className="flex bg-brandBlue/20 p-5 rounded-xl flex-row justify-center items-center mt-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              1
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Total Farming Area = 50 Acres Total Farming Capacity: 1.25 million
            Boxes
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              2
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            The JFTL Processing Factory being adjacent to the farming ponds
            helps us receive and process the best quality fresh products for our
            valuable clients.
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CrabFarming;
