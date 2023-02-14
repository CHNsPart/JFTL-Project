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
    <div className="flex h-auto w-full flex-col justify-center items-center">
      {/* <Carousel>
            <div>okay</div>
        </Carousel> */}
      <div className="h-40 w-full mb-10 flex justify-center items-center">
        <h1 className="text-7xl text-brandBlue font-bold">Our Partners</h1>
      </div>
      <div className="resize h-48 w-full flex flex-row justify-center items-center">
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={dni} alt="DNI" className="h-32 w-32" />
        </div>
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={eurofood} alt="eurofood" className="h-32 w-32" />
        </div>
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={eleven} alt="eleven" className="h-32 w-32" />
        </div>
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={jgroup} alt="jgroup" className="h-32 w-32" />
        </div>
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={jfcinter} alt="jfcinter" className="h-32 w-32" />
        </div>
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={osp} alt="osp" className="h-32 w-32" />
        </div>
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={winds} alt="winds" className="h-32 w-32" />
        </div>
        <div className="h-40 w-64 flex justify-center items-center">
          <Image src={uniglobal} alt="uniglobal" className="h-32 w-32" />
        </div>
      </div>
    </div>
  );
};

export default CompanyBar;
