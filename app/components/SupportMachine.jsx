"use client"
import React from 'react'
import sm1 from '../../public/sm1.png';
import sm2 from '../../public/sm2.png';
import sm3 from '../../public/sm3.png';
import sm4 from '../../public/sm4.png';
import sm5 from '../../public/sm5.png';
import sm6 from '../../public/sm6.png';
import sm7 from '../../public/sm7.png';
import sm8 from '../../public/sm8.png';
import sm9 from '../../public/sm9.png';
import sm10 from '../../public/sm10.png';
import sm11 from '../../public/sm11.png';
import Image from 'next/image'
import { GiCrab, GiBuyCard } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
//import Carou from './Carou';


const SupportMachine = () => {
  return (
    <div className="h-fit my-16 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
        <div className='w-full flex flex-row justify-center items-center opacity-20 gap-10'>
            <GiBuyCard size={50}/>
            <GiCrab size={50}/>
            <FaTruck size={50}/>
            <GiBuyCard size={50}/>
            <GiCrab size={50}/>
            <FaTruck size={50}/>
            <GiBuyCard size={50}/>
            <GiCrab size={50}/>
            <FaTruck size={50}/>
            <GiBuyCard size={50}/>
            <GiCrab size={50}/>
            <FaTruck size={50}/>
            <GiBuyCard size={50}/>
            <GiCrab size={50}/>
            <FaTruck size={50}/>
        </div>
        <div className='flex flex-col justify-center items-center bg-transparent my-16'>
            <h1 className="text-7xl w-full text-center text-bold font-black text-brandBlue">
                JFTL Processing Support Mechinery
            </h1>
        </div>

       {/*  <div className='grid grid-cols-1 w-3/4 gap-2 my-20 hover:gap-4 transition-all duration-300 ease-in-out'>
            <div className="grid grid-cols-5 gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
                <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-max rounded-l-full w-full border transition-all duration-300 ease-in-out" src={sm5} />
                <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-max rounded-t-full rounded-r-full w-full border transition-all duration-300 ease-in-out" src={sm6} />
                <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-max rounded-b-full rounded-r-full w-full border transition-all duration-300 ease-in-out" src={sm7} />
                <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-max rounded-t-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={sm2} />
                <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-max rounded-l-full w-full border transition-all duration-300 ease-in-out" src={sm1} />
            </div>
            <div 
                className
                ="grid grid-cols-5 gap-2 justify-center w-full
                    hover:gap-4
                    transition-all duration-300 ease-in-out"
                >
                    <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto col-start-1 rounded-l-full w-3/4 border transition-all duration-300 ease-in-out" src={sm3} />
                    <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto col-end-6 justify-end w-3/4 border transition-all duration-300 ease-in-out rounded-r-full" src={sm4} />
            </div>
        </div> */}



    <div className="flex bg-brandBlue/20 my-2 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              1
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm6} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Flake Ice Machine (Qty 02; 10 Ton/day)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              2
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm5} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Blast Freezers (Qty 04; 6.3 Ton/day)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
    </div>

    
    <div className="flex bg-brandBlue/20 my-2 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              3
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm3} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            3D Blast Freezer @ -37oC, KOGASUN, Japan
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              4
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm4} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Metal Detector (ISHIDA, Japan)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
    </div>
    
    <div className="flex bg-brandBlue/20 my-2 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              5
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm2} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Cold Storage @ -20oC ~-25oC (Total 200 Ton)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              6
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm7} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Metal Detector (ISHIDA, Japan)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
    </div>
    <div className="flex bg-brandBlue/20 my-2 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              7
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm1} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Cold Storage @ -20oC ~-25oC (Total 200 Ton)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              8
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm8} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Electric Sub-Station (315 KVA) with PFI
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
    </div>

    <div className="flex bg-brandBlue/20 my-2 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              9
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm9} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Automatic Voltage Regulator (AVR, 400 KVA)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              10
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm10} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            24 Hr Backup Generator (300 KVA) TEMPEST, UK
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
    </div>
    <div className="flex bg-brandBlue/20 my-2 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-10 w-10 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-darkBrandBlue bg-clip-padding">
              11
            </div>
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-auto w-1/2 border transition-all duration-300 ease-in-out" src={sm11} />
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Standby Compressor Machine unit for Cold Storage (Bietzer, Germany)
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
    </div>


    {/* </div> */}
        {/* <Carou/> */}
   </div>
  )
}

export default SupportMachine