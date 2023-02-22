'use-client';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/JFTLLogo.jpg'
//import videoBg from '../../public/jftlbg.mp4'
import './landing.css';

const Landing = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row justify-center items-center">
      <div 
        className="w-full absolute h-screen bg-black opacity-60"
      />
      <video
        className="w-full h-full object-cover"
        src="https://jftl-bd.com/landingVid.mp4"
        controls={false}
        muted={true}
        autoPlay={true}
        loop={true}
      />
      {/* Main Element */}
      <section className="absolute flex flex-row justify-center items-center w-full h-full">
        <div className="flex flex-row justify-center items-center h-full w-full">
          <div className="flex flex-col justify-center items-center">
            <Image src={logo} height={120} width={120} className="mb-10 rounded-lg shadow-xl shadow-brandBlue/50" />
            <h1 className="text-6xl leading-tight text-white font-bold text-center">
              <span className="text-red-500/90 bg-white px-2 rounded-lg">
                JAPAN
              </span>{' '}
              FAST
              <br />
              TRADE LTD
            </h1>
            <p className="flex text-center justify-center items-center text-md text-white p-1 pb-4">
              Presenting Bangladeshi seafood delicacy from <br />
              the Sundarban (world’s largest mangrove forest)
              <br /> to the rest of the World
            </p>
{/*             <button
              className={`bg-gradient-to-r from-lightBrandBlue to-darkBrandBlue w-64 tracking-wider h-16 mt-5 rounded-full text-2xl font-bold text-white font-sans`}
            >
              Contact Us{' '}
            </button> */}
            <div id="circle-orbit-container">
              <div id="middle-orbit">
                <div className="middle-orbit-cirlces"></div>
              </div>

              <div id="outer-orbit">
                <div className="outer-orbit-cirlces"></div>
                <div className="outer-orbit-cirlces-2"></div>
                <div className="outer-orbit-cirlces-3"></div>
                <div className="outer-orbit-cirlces-4"></div>
            </div>
          </div>
          </div>
        </div>

        <div className="text-right flex flex-row justify-center items-center h-full w-full">

        </div>
      </section>
    </div>
  );
};

export default Landing;
