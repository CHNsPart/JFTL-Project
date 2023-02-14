import React from 'react'
import { GiCatch, GiCrab, GiFarmer, GiBuyCard } from "react-icons/gi"
import { FaTruck } from "react-icons/fa"

const ValueDetails = () => {
  return (
    <div className='min-h-screen my-10 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y'>
    <div className='bg-[url("/crabbgf.png")] bg-no-repeat bg-center bg-cover h-full w-[100%] absolute -z-20 opacity-20' />
      <div className='w-full resize-y mt-10 px-36 flex flex-row justify-around items-center'>
        <div className='w-1/2 mr-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <GiCatch className='mb-5' size={50} /> Crab Catcher
          </h1>
          <p className='text-left text-lg tracking-wider'>
            With permission from the Forest Department, the fishermen catch and collects the wild live baby crabs suitable for farming from the canals of the mangroves & then supply those to the wholesalers.
          </p>
        </div>
        <div className='w-1/2 ml-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <GiFarmer className='mb-5' size={50} /> Crab Farmers
          </h1>
          <p className='text-left text-lg tracking-wider'>
            Farmers receive the baby crabs for farming from the crab catchers  or the wholesalers and then place them into the boxes of the farming ponds. There are around 300 soft shell crab farmers in the area.
          </p>
        </div>
      </div>


      <div className='w-full mt-10 px-36 flex flex-row justify-around items-center'>
        <div className='w-1/2 mr-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <GiCrab className='mb-5' size={50} /> Soft Shell Crab Processors
          </h1>
          <p className='text-left text-lg tracking-wider'>
There are only few HACCP certified authorized soft shell crab processors in the area and JFTL is one of those since 2017. We are also certified by BRC in 2022.
          </p>
        </div>
        <div className='w-1/2 ml-5 bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
          <h1 className='text-5xl font-bold mb-5'>
            <FaTruck className='mb-5' size={50} /> Exporters
          </h1>
          <p className='text-left text-lg tracking-wider'>JFTL has been performing as one of the major exporters since January 2018. In 2021, the total volume of JFTL frozen soft shell crab export was around 500 MT.</p>
        </div>
      </div>

    <div className='w-full mt-10 mb-24 px-36 flex flex-row justify-around items-center'>
      <div className='w-full bg-darkBrandBlue px-5 h-fit py-10 rounded-lg text-white'>
        <h1 className='text-5xl font-bold mb-5'>
          <GiBuyCard className='mb-5' size={50} /> Buyers
        </h1>
        <p className='text-left text-lg tracking-wider'>The most important partners in the value chain are the Buyers. If there were no buyers then there would be no demand for the soft shell crabs and as such, there would be no activities in the whole process. JFTL exports its products to some exclusive buyers in four major continents i.e. America, Europe, Asia & Australia.</p>
      </div>
      </div>
    </div>
  )
}

export default ValueDetails