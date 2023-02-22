"use client"
import React from 'react'
import Image from 'next/image'
import map from "../../public/JFTL-Map.png"
import aer from "../../public/drone.JPG"
//import drone from "../../public/drone.webm"

const Location = () => {
  return (
    <>
    <div className='h-fit w-full py-10 flex flex-row justify-center items-center'>
        <div className='flex justify-center items-center flex-col w-full bg-transparent text-center'>
            <h1 className='text-5xl text-bold font-black text-brandBlue mb-5'>
                Project Location
            </h1>
            <p className='w-2/3 px-4 text-lg'>
                Explore the Beauty and Delicacy of Bangladeshi Seafood from the mother nature, the Sundarban Mangrove Forest (the largest single terrain mangrove forest of the world)
            </p>
            <div className='w-full flex flex-col justify-center items-center px-4 pt-4'>
                <Image src={aer} className='object-contain rounded-3xl brightness-80 contrast-80 hue-rotate-50' />
                <p className='pt-5 italic font-sans font-semibold text-yellow-700'>
                    Aerial view of JFTL project at Shyamnagar, Satkhira; Total area: 50 Acres (Located just beside the Sundarbans, world’s largest mangrove forest)
                </p>
            </div>
        </div>
            <div className='w-2/3 flex justify-center rounded-3xl max-h-[500px] items-center'>
                 <Image src={map} className='max-h-[500px] object-contain rounded-3xl' />
            </div>
    </div>
        <div className='h-fit w-full px-10 flex flex-row justify-center items-center'>
        <video
            autoPlay
            loop
            muted
            className='rounded-xl'
        >
            <source src="https://jftl-bd.com/JFTLdrone.webm" type='video/webm' />
            Your browser does not support the video tag.
      </video>
        </div>
    </>
  )
}

export default Location