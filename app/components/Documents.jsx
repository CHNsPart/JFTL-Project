import React from 'react'
import Image from 'next/image'
import { GiCrab, GiBuyCard } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
import vp1 from '../../public/mg1.png'
import vp2 from '../../public/mg2.png'

const Documents = () => {
  return (
    <>
    <div className="min-h-fit my-16 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
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
            JFTL Management <span className='text-red-500/90 font-black'>& </span>Office Facility
        </h1>
        <h2 className='bg-red-500/80 px-4 rounded-full mt-4 text-white'>JFTL Management Team</h2>

        <div className='grid grid-cols-1 w-3/4 gap-2 my-20 hover:gap-4 transition-all duration-300 ease-in-out'>
        <div className="grid grid-cols-1 gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-3xl w-full border transition-all duration-300 ease-in-out" src={vp1} />
        </div>
    </div>
    </div>
   </div>



    <div className="min-h-fit my-16 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
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
        <h2 className='bg-red-500/80 px-4 rounded-full mt-4 text-white'>JFTL Office at the Factory</h2>

        <div className='grid grid-cols-1 w-3/4 gap-2 my-20 hover:gap-4 transition-all duration-300 ease-in-out'>
        <div className="grid grid-cols-1 gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
            <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-cover h-full rounded-3xl w-full border transition-all duration-300 ease-in-out" src={vp2} />
        </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Documents