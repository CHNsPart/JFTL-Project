"use-client"
import React from 'react'
//import videoBg from '../../public/jftlbg.mp4'

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
        {/* </div> */}
    </div>
  )
}

export default Landing