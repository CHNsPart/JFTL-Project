'use client';
import React from 'react';
import Image from 'next/image';
import softShell from '../../public/softshell.png';
import b1 from '../../public/blob1.svg';
import { AiFillCaretDown } from 'react-icons/ai';

const Example = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row h-screen w-full justify-center items-center">
        <div className="flex w-full lg:w-1/2 flex-col justify-center items-center">
          <Image
            height={'auto'}
            width={'auto'}
            className="h-44 lg:-mt-[5rem] opacity-10 lg:-ml-[15rem] w-auto absolute"
            src={b1}
          />
          <Image
            height={'auto'}
            width={'auto'}
            className="h-24 lg:rotate-90 lg:mt-[2rem] opacity-10 lg:ml-[15rem] w-auto absolute"
            src={b1}
          />
          <h1 className="text-7xl lg:text-5xl md:text- text-brandBlue font-bold">
            Frozen Mud Crab
          </h1>
          <p className="flex text-2xl font-bold mt-5 justify-center items-center w-full text-red-500/90">
            Frozen Soft Shell Crab
          </p>
          <p className="w-full lg:w-1/2 text-lg text-center mt-5 tracking-wider">
            There are 5 major players in the total value chain of Frozen Soft Shell Crab farming and JFTL plays three major roles among them. <br /><span className='text-darkBrandBlue font-bold'>These are...</span>
          </p>
        </div>
        <div className="relative flex-row w-full lg:w-1/3 justify-center items-center h-full hidden lg:flex">
          <div className="h-[30rem] lg:h-[20rem] w-full lg:w-[20rem] z-20 bg-brandBlue">
            <Image
              height={'auto'}
              width={'auto'}
              className="bg-contain object-cover bg-center h-full w-full p-2"
              src={softShell}
            />
          </div>
          <div className="h-[30rem] lg:h-[20rem] w-full lg:w-[20rem] absolute z-10 mt-5 lg:mt-10 ml-5 lg:ml-10 bg-darkBrandBlue" />
        </div>
      </div>
      <div className="rounded-full my-20 h-20 w-20 bg-brandBlue flex justify-center items-center">
        <AiFillCaretDown size={30} color="white" />
      </div>
    </div>
  );
};

export default Example;
