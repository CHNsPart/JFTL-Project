'use-client';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React from 'react';
import Image from 'next/image';
import dni from '../../public/dni.svg';
import eurofood from '../../public/eurofood.svg';
import eleven from '../../public/7eleven.svg';
import jfcinter from '../../public/jfcinter.svg';
import jgroup from '../../public/jgroup.svg';
import osp from '../../public/osp.svg';
import winds from '../../public/winds.svg';
import uniglobal from '../../public/uniglobal.svg';

const CompanyBar = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 w-full">
      <div className="mb-10 w-full flex justify-center items-center">
        <h1 className="text-4xl md:text-7xl text-brandBlue font-bold">Our Partners</h1>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={dni} alt="DNI" className="h-32 w-32" />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={eurofood} alt="eurofood" className="h-32 w-32" />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={eleven} alt="eleven" className="h-32 w-32" />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={jgroup} alt="jgroup" className="h-32 w-32" />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={jfcinter} alt="jfcinter" className="h-32 w-32" />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={osp} alt="osp" className="h-32 w-32" />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={winds} alt="winds" className="h-32 w-32" />
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 lg:w-1/8 p-4">
          <Image src={uniglobal} alt="uniglobal" className="h-32 w-32" />
        </div>
      </div>
    </div>
  );
};

export default CompanyBar;
