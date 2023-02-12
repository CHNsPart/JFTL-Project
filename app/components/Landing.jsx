"use-client"
import React from 'react'
//import videoBg from '../../public/jftlbg.mp4'
import landing from "./landing.css"

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
        <section className='absolute flex flex-row justify-around items-center w-[100%] h-[100%]'>
          <div className='text-left flex flex-col justify-center items-center w-full'>
            <h1 className='text-7xl text-white font-bold'>
              JAPAN FAST<br/>TRADE LTD
            </h1>
            <h2 className='w-full justify-center items-center flex text-lg text-white pt-3'>
              Presenting Bangladeshi seafood delicacy from <br/>the Sundarban (world’s largest mangrove forest)<br/> to the rest of the World
            </h2>
          </div>

          <div className='text-right flex flex-row justify-center w-full '>
            
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