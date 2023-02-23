import React from 'react';
import Image from 'next/image';
import lab1 from '../../public/lab1.png';
import lab2 from '../../public/lab2.png';
import lab3 from '../../public/lab3.png';
import lab4 from '../../public/lab4.png';
import lab5 from '../../public/lab5.png';
import lab6 from '../../public/lab6.png';
import lab7 from '../../public/lab7.png';
import lab8 from '../../public/lab8.png';
import haccp from '../../public/HACCP.png';
import becgs from '../../public/brcgs.png';
import { GiCrab, GiBuyCard } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';

const CrabFarming = () => {
  return (
  <div className="min-h-screen my-16 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
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
    <div className='flex flex-col justify-center items-center bg-transparent mt-16'>
      <h1 className="text-7xl w-full text-center text-bold font-black text-brandBlue">
        JFTL Soft Shell Crab Processing
      </h1>

    <div className='grid grid-cols-1 w-3/4 gap-2 my-20 hover:gap-4 transition-all duration-300 ease-in-out'>
      <div className="grid grid-cols-4 gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab1} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-t-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab2} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-b-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab3} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full  w-full border transition-all duration-300 ease-in-out rounded-r-full" src={lab4} />
      </div>
      <div 
        className
          ="grid grid-cols-4 gap-2
            hover:gap-4
            transition-all duration-300 ease-in-out"
        >
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-l-full w-full border transition-all duration-300 ease-in-out" src={lab5} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-t-full rounded-r-full w-full border transition-all duration-300 ease-in-out" src={lab6} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-b-full rounded-r-full w-full border transition-all duration-300 ease-in-out" src={lab7} />
        <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full w-full border transition-all duration-300 ease-in-out rounded-r-full" src={lab8} />
      </div>
      <p className='w-full mt-2 text-center italic font-sans text-gray-400'>Internationally recognized Food Safety Standards are strictly followed in JFTL soft crab processing
The Quality Manual also covers protocols for COVID management</p>
    </div>
      <div className="flex bg-brandBlue/20 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
              <Image className="object-cover px-2 w-full" src={becgs} />
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            The Quality Manual also covers protocols for COVID management
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-20 w-20 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
              <Image className="object-cover brightness-150 p-0 w-full" src={haccp} />
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Internationally recognized Food Safety Standards are strictly
            followed in JFTL soft crab processing
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
      </div>
      </div>
   </div>
  );
};

export default CrabFarming;
