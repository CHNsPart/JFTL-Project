'use-client';
import React from 'react';
import { FaFeatherAlt } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { MdOutlineImportExport } from 'react-icons/md';
import { GiSadCrab } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

const ShortNotes = () => {
  return (
    <div className="min-h-screen w-full bg-slate-300 snap snap-y bg-transparent">
      <div className='bg-[url("/crabbgf.png")] bg-no-repeat bg-center bg-cover min-h-screen w-[100%] absolute -z-20 opacity-20' />
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl py-10 w-full text-center text-bold font-black text-brandBlue">
          Short Notes
        </h1>
        {/* Top */}
        <div className="flex flex-row justify-center items-center w-full snap snap-y p-4">
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
            <div className="text-left w-full">
              <div className="h-16 w-16 bg-trasnparent shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <FaFeatherAlt
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              A Joint Venture between <br />
              <span className="font-bold text-brandBlue">
                Japan & Bangladesh
              </span>
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
            <div className="text-left w-full">
              <div className="h-16 w-16 bg-trasnparent shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <MdOutlineBusinessCenter
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              An Associate of <br />
              <span className="font-bold text-brandBlue">J Group Japan</span>
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg">
            <div className="text-left w-full">
              <div className="h-16 w-16 bg-trasnparent shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <MdOutlineImportExport
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              A <span className="font-bold text-brandBlue">100% export</span>
              <br />
              oriented company
            </p>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-row justify-center items-center w-full snap snap-y p-4">
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg mb-10">
            <div className="text-left w-full">
              <div className="h-16 w-16 bg-trasnparent shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <GiSadCrab
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left text-base lg:text-md w-full md:text-md sm:text-xs">
              <span className="font-bold text-brandBlue">Mud Crab Farming</span>
              , (Frozen Mud Crab / Frozen Soft Shell Crab / Live Mud Crabs /
              Hard Shell Crab) Processing & Export
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg mb-10">
            <div className="text-left w-full">
              <div className="h-16 w-16 bg-trasnparent shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <AiFillSafetyCertificate
                  size={30}
                  className="animate-wiggle text-brandBlue"
                />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              <span className="font-bold text-brandBlue">BRCGS</span> &{' '}
              <span className="font-bold text-brandBlue">HACCP</span> <br />{' '}
              Certified
            </p>
          </div>
          <div className="w-[390px] mx-4 h-[200px] rounded-xl px-10 bg-white flex flex-col justify-center items-center bg-clip-padding backdrop-filter border-2 border-gray-200 hover:border-brandBlue hover:border-2 transition-all duration-500 ease-in-out backdrop-blur-sm bg-opacity-20 hover:shadow-2xl shadow-lg mb-10">
            <div className="text-left w-full">
              <div className="h-16 w-16 bg-trasnparent shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-brandBlue">
                <BiWorld size={30} className="animate-wiggle text-brandBlue" />
              </div>
            </div>

            <p className="text-left w-full md:text-md">
              Shayamnagar, Satkhira, <br />
              <span className="font-bold text-brandBlue">Bangladesh</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortNotes;
