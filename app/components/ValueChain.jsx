import React from 'react';
import Image from 'next/image';
import value from '../../public/valueChain.png';

const ValueChain = () => {
  return (
    <div
      id="valueChain"
      className="flex h-screen w-full flex-col justify-center items-center"
    >
      <div className='bg-[url("/crabbgf.png")] bg-no-repeat bg-center bg-cover h-[100%] w-[100%] absolute -z-20 opacity-20' />
      <div className="h-auto w-full my-14 flex justify-center items-center">
        <h1 className="text-5xl md:text- text-brandBlue font-bold">
          THE VALUE CHAIN
          <span className="flex justify-center items-center w-full text-red-500/90">
            &
          </span>
          THE ROLE OF JFTL
        </h1>
      </div>
      <Image
        src={value}
        height="auto"
        width="auto"
        className="h-auto px-24 w-full my-10"
      />
    </div>
  );
};

export default ValueChain;
