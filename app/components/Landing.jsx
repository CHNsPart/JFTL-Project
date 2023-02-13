"use-client"
import React from 'react'
//import videoBg from '../../public/jftlbg.mp4'
import "./landing.css"

const Landing = () => {
  return (
    <div className='h-screen flex justify-center items-center w-full bg-slate-300 snap snap-y'>
        <div className='w-[100%] absolute h-[100%] bg-black opacity-60'/>
          <video 
            className='w-[100%] h-[100%] object-cover'    src="https://chnspart.com/JFTL/JFTL-VID-PRO.mp4"
            controls={false}
            muted={true}
            autoPlay={true}
            loop={true}
          />
        {/* Main Element */}
        <section className='absolute flex flex-row justify-around items-center w-full h-full'>
        <div className='flex flex-row justify-center items-center h-full w-full'>
          <div className='flex flex-col'>
            <h1 className='text-7xl leading-tight text-white font-bold'>
                <span className='text-red-500/90 bg-white px-2 rounded-lg'>JAPAN</span> FAST<br/>TRADE LTD
            </h1>
            <h2 className='flex justify-center pr-28 items-center text-lg text-white pt-3'>
            Presenting Bangladeshi seafood delicacy from <br/>the Sundarban (world’s largest mangrove forest)<br/> to the rest of the World
            </h2>
            <button className={`bg-gradient-to-r from-lightBrandBlue to-darkBrandBlue w-64 tracking-wider h-16 mt-5 rounded-full text-2xl font-bold text-white font-sans`} > Contact Us </button>
          </div>
        </div>
{/*           <div className='flex flex-col justify-start justify-self-start items-center w-full'>
            <h1 className='text-7xl text-white font-bold'>
              JAPAN FAST<br/>TRADE LTD
            </h1>
            <h2 className='flex justify-center pr-16 items-center text-lg text-white pt-3'>
            Presenting Bangladeshi seafood delicacy from <br/>the Sundarban (world’s largest mangrove forest)<br/> to the rest of the World
            </h2>
            <button className={`bg-gradient-to-r from-cyan-500 to-blue-500 w-32 tracking-wider h-10 rounded-full`} > Contact Us </button>
          </div> */}

          <div className='text-right flex flex-row justify-center items-center h-full w-full'>
            <div id="circle-orbit-container"> 
              <div 
                id="middle-orbit"
              >
                <div 
                  class="middle-orbit-cirlces">
                </div>
              </div>

              <div id="outer-orbit">
                <div 
                  class="outer-orbit-cirlces">
                </div>
                <div 
                  class="outer-orbit-cirlces-2">
                </div>
                <div 
                  class="outer-orbit-cirlces-3">
                </div>
                <div 
                  class="outer-orbit-cirlces-4">
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Landing