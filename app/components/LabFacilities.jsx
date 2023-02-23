import React from 'react'
import Image from 'next/image';
import mlab1 from '../../public/mlab1.png';
import mlab2 from '../../public/mlab2.png';
import mlab3 from '../../public/mlab3.png';
import mlab4 from '../../public/mlab4.png';
import mlab5 from '../../public/mlab5.png';
import { GiCatch, GiCrab, GiFarmer } from 'react-icons/gi';

const LabFacilities = () => {
return (
    <div className="min-h-screen my-16 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
      <div className='w-full flex flex-row justify-center items-center opacity-20 gap-10'>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
        <GiFarmer size={50}/>
        <GiCrab size={50}/>
        <GiCatch size={50}/>
      </div>
      <h1 className="text-6xl mt-10 w-full text-center text-bold font-black text-brandBlue">
        JFTL Microbiological Laboratory Facilities
      </h1>
      
      <div className="w-full h-auto flex flex-row justify-center my-20 lg:px-10">
        <div className="grid grid-cols-5 gap-2 hover:gap-4 transition-all duration-300 ease-in-out">
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-contain rounded-l-full w-full h-full border transition-all duration-300 ease-in-out" src={mlab1} />
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-contain rounded-t-full rounded-l-full w-full h-full border transition-all duration-300 ease-in-out" src={mlab2} />
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-contain rounded-b-full rounded-l-full w-full h-full border transition-all duration-300 ease-in-out" src={mlab3} />
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-contain rounded-b-full rounded-l-full w-full h-full border transition-all duration-300 ease-in-out" src={mlab5} />
          <Image className="border-none hover:shadow-2xl hover:shadow-sky-500 object-contain w-full h-full border transition-all duration-300 ease-in-out rounded-r-full" src={mlab4} />
        </div>
      </div>

      <div className="flex bg-brandBlue/20 p-5 rounded-xl flex-row justify-center items-center mt-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              1
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            JFTL has two separate labs for Microbiological & Water quality testing
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>

        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              2
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Soft Shell Crab Samples tested from each production batch/Lot
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
      </div>
      
      <div className="flex bg-brandBlue/20 p-5 rounded-xl flex-row justify-center items-center mt-5">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              3
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Soft Shell Crab Samples tested from each production batch/Lot
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>

        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              4
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Laboratory directed by the Director (QA&ES) who is a Post-Graduate in Microbiology and a Certified Lead Auditor in the Food Safety Standard Management & Manufacturing sector
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
      </div>

      <div className="flex bg-brandBlue/20 p-5 rounded-xl flex-row justify-center items-center mt-5">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              4
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Lab Manpower: 02 x Graduate Microbiologist & 01 x Lab Technician
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>

        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 bg-brandBlue shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 font-bold text-2xl text-white border-brandBlue">
              5
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            Major lab equipment includes all equipment necessary to maintain international standards
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
      </div>


    </div>
  );
}

export default LabFacilities