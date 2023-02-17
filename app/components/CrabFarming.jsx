import React from 'react';
import Image from 'next/image';
import softShell from '../../public/softshell.png';
import softShell2 from '../../public/softshell2.png';
import { AiFillCaretDown } from 'react-icons/ai';

const CrabFarming = () => {
  return (
    <div className="min-h-screen my-10 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
      <h1 className="text-7xl w-full text-center text-bold font-black text-brandBlue">
        JFTL SOFT SHELL CRAB FARMING
      </h1>
      <div className="w-1/2 flex flex-row justify-center my-10 bg-brandBlue/90">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 p-2 sm:grid-cols-2">
          <Image className="object-cover w-full border" src={softShell} />
          <Image className="object-cover w-full border" src={softShell} />
          <Image className="object-cover w-full border" src={softShell} />
          <Image className="object-cover w-full border" src={softShell} />
        </div>
        {/* <Image height={"auto"} width={"2rem"} src={softShell} className="p-2 "/>
            <Image height={"auto"} width={"2rem"} src={softShell2} className="p-2"/> */}
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
