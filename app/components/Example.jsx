'use-client';
import React from 'react';
import { FaFeatherAlt } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { MdOutlineImportExport } from 'react-icons/md';
import { GiSadCrab } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
//import crabbg from "../../public/crabbgf.png"

const Example = () => {
  return (
    <div className="h-screen w-full bg-slate-300 snap snap-y bg-transparent">
      <div className='bg-[url("/crabbgf.png")] bg-no-repeat bg-center bg-cover h-[100%] w-[100%] absolute -z-20 opacity-30' />
      <h1 className="pt-32 mb-20 text-7xl w-full text-center text-bold font-black text-sky-500">
        Short Notes
      </h1>
      {/* Top */}
      <div className="flex flex-row justify-center items-center w-full snap snap-y p-4">
        <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-sky-500 hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
          <div className="text-left w-full">
            <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-sky-200">
              <FaFeatherAlt size={30} className="animate-wiggle text-sky-500" />
            </div>
          </div>

          <p className="text-left w-full">
            A Joint Venture between Japan & Bangladesh
          </p>
        </div>
        <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-sky-500 hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
          <div className="text-left w-full">
            <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-sky-200">
              <MdOutlineBusinessCenter
                size={30}
                className="animate-wiggle text-sky-500"
              />
            </div>
          </div>

          <p className="text-left w-full">
            An Associate of <br /> J Group Japan
          </p>
        </div>
        <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-sky-500 hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
          <div className="text-left w-full">
            <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-sky-200">
              <MdOutlineImportExport
                size={30}
                className="animate-wiggle text-sky-500"
              />
            </div>
          </div>

          <p className="text-left w-full">A 100% export oriented company</p>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-row justify-center items-center w-full snap snap-y p-4">
        <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-sky-500 hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
          <div className="text-left w-full">
            <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-sky-200">
              <GiSadCrab size={30} className="animate-wiggle text-sky-500" />
            </div>
          </div>

          <p className="text-left w-full">
            Mud Crab Farming, Processing & Export
          </p>
        </div>
        <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-sky-500 hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
          <div className="text-left w-full">
            <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-sky-200">
              <AiFillSafetyCertificate
                size={30}
                className="animate-wiggle text-sky-500"
              />
            </div>
          </div>

          <p className="text-left w-full">
            BRCGS & HACCP <br /> Certified
          </p>
        </div>
        <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-sky-500 hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
          <div className="text-left w-full">
            <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-sky-200">
              <BiWorld size={30} className="animate-wiggle text-sky-500" />
            </div>
          </div>

          <p className="text-left w-full">Shayamnagar, Satkhira, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Example;
