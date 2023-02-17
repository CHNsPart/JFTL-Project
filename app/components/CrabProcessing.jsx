import React from 'react';
import Image from 'next/image';
import softShell from '../../public/softshell.png';
import softShell2 from '../../public/softshell2.png';
import haccp from '../../public/HACCP.png';
import becgs from '../../public/brcgs.png';
import { AiFillCaretDown } from 'react-icons/ai';

const CrabFarming = () => {
  return (
    <div className="min-h-screen my-10 relative flex flex-col justify-center items-center w-full bg-transparent snap snap-y">
      <h1 className="text-7xl w-full text-center text-bold font-black text-brandBlue">
        JFTL Soft Shell Crab Processing
      </h1>
      <div className="w-2/3 flex flex-row justify-between items-center my-10">
        <div className="w-1/2 flex flex-col justify-center my-10 mx-5 bg-brandBlue/40">
          <div className="grid grid-rows-2 gap-2 lg:grid-cols-2 p-2 sm:grid-cols-2">
            <Image className="object-cover w-full border" src={softShell} />
            <Image className="object-cover w-full border" src={softShell} />
            <Image className="object-cover w-full border" src={softShell} />
            <Image className="object-cover w-full border" src={softShell} />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center my-10 mx-5 bg-brandBlue/40">
          <div className="grid grid-rows-2 gap-2 lg:grid-cols-2 p-2 sm:grid-cols-2">
            <Image className="object-cover w-full border" src={softShell} />
            <Image className="object-cover w-full border" src={softShell} />
            <Image className="object-cover w-full border" src={softShell} />
            <Image className="object-cover w-full border" src={softShell} />
          </div>
          {/* <Image height={"auto"} width={"2rem"} src={softShell} className="p-2 "/>
                <Image height={"auto"} width={"2rem"} src={softShell2} className="p-2"/> */}
        </div>
      </div>
      <div className="flex bg-brandBlue/20 p-5 rounded-xl flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
              <Image className="object-cover p-1 w-full" src={becgs} />
            </div>
          </div>
          <p className="text-left text-lg px-10 w-[30rem]">
            The Quality Manual also covers protocols for COVID management
          </p>
          <div className="w-[30rem] px-10"></div>
        </div>
        <div className="w-full flex flex-col justify-center justify-self-start items-center">
          <div className="w-[30rem] px-10">
            <div className="h-16 w-16 shadow-xl flex justify-center items-center mb-5 rounded-full text-left font-bold text-2xl text-white bg-clip-padding">
              <Image className="object-cover p-0 w-full" src={haccp} />
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
  );
};

export default CrabFarming;
