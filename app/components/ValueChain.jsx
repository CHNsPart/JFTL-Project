import React from 'react';
import Image from 'next/image';
import valueComp from '../../public/valueComp.png';

const ValueChain = () => {
  return (
    <div
      className="flex h-fit w-full flex-col justify-center items-center"
    >
      <div className='bg-[url("/crabbgf.png")] bg-no-repeat bg-center bg-cover h-[100%] w-full absolute -z-20 opacity-20' />
      <div className="h-auto w-full flex justify-center items-center">
        <h1 className="text-5xl md:text- text-brandBlue font-bold">
          THE VALUE CHAIN
          <span className="flex justify-center items-center w-full text-red-500/90">
            &
          </span>
          THE ROLE OF JFTL
        </h1>
      </div>
      <Image
        src={valueComp}
        height="auto"
        width="auto"
        className="px-24 w-full my-10"
      />

      {/*      <div className='w-full mt-10 px-36 flex flex-row justify-around items-center'>
        <div className='w-1/2 mr-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <GiCatch className='mb-2' size={30} /> Crab Catcher
          </h1>
          <p className='text-left text-lg tracking-wider'>
            With permission from the Forest Department, the fishermen catch and collects the wild live baby crabs suitable for farming from the canals of the mangroves & then supply those to the wholesalers.
          </p>
        </div>
        <div className='w-1/2 ml-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <GiCatch className='mb-2' size={30} /> Crab Farmers
          </h1>
          <p className='text-left text-lg tracking-wider'>
            Farmers receive the baby crabs for farming from the crab catchers  or the wholesalers and then place them into the boxes of the farming ponds. There are around 300 soft shell crab farmers in the area.
          </p>
        </div>
      </div>


      <div className='w-full mt-10 px-36 flex flex-row justify-around items-center'>
        <div className='w-1/2 mr-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <GiCatch className='mb-2' size={30} /> Soft Shell Crab Processors
          </h1>
          <p className='text-left text-lg tracking-wider'>
There are only few HACCP certified authorized soft shell crab processors in the area and JFTL is one of those since 2017. We are also certified by BRC in 2022.
          </p>
        </div>
        <div className='w-1/2 ml-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <GiCatch className='mb-2' size={30} /> Exporters
          </h1>
          <p className='text-left text-lg tracking-wider'>JFTL has been performing as one of the major exporters since January 2018. In 2021, the total volume of JFTL frozen soft shell crab export was around 500 MT.</p>
        </div>
      </div>

    <div className='w-full mt-10 mb-24 px-36 flex flex-row justify-around items-center'>
      <div className='w-full bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
        <h1 className='text-5xl font-bold mb-5'>
          <GiCatch className='mb-2' size={30} /> Buyers
        </h1>
        <p className='text-left text-lg tracking-wider'>The most important partners in the value chain are the Buyers. If there were no buyers then there would be no demand for the soft shell crabs and as such, there would be no activities in the whole process. JFTL exports its products to some exclusive buyers in four major continents i.e. America, Europe, Asia & Australia.</p>
      </div>
      </div> */}
    </div>
  );
};

export default ValueChain;
