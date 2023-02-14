'use client';
import React from 'react';
import Image from 'next/image';
import footer from '../../public/footer.png';
import linkedin from '../../public/linkedin.png';
import insta from '../../public/insta.png';
import whatsapp from '../../public/whatsapp.png';
import facebook from '../../public/facebook.png';

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex h-auto w-full flex-col justify-center items-center bg-black">
      <Image
        src={footer}
        height="auto"
        width="auto"
        className="h-auto w-full"
      />
      <div className="absolute w-1/2 bg-brandBlue h-auto rounded-2xl md:ml-96">
        <h1 className="text-center text-white text-5xl text-bold py-10">
          Contact Us
        </h1>
        <form
          action="mailto:chayan.adiq@gmail.com"
          method="post"
          enctype="text/plain"
          className="w-full justify-center text-center pb-10"
        >
          <input
            name="sname"
            type="email"
            className="px-10 md:my-5 py-5 text-lg rounded-lg mx-5"
            placeholder="e-main"
          />
          <input
            name="ssubject"
            type="text"
            className="px-10 py-5 md:mb-5 text-lg rounded-lg mx-5"
            placeholder="your query"
          />
          <button className="px-10 md:px-32 py-5 text-lg rounded-lg mx-5 bg-black text-white">
            Submit
          </button>
        </form>
      </div>
      <div className="h-[30rem] w-full bottom-[10px] flex flex-row justify-center items-center text-white">
        <div className="flex flex-col justify-start items-start w-full">
          <h1 className="text-white px-10 text-5xl tracking-wide">JFTL</h1>
          <p className="px-10 tracking-wide leading-10">
            Presenting Bangladeshi delicacy to the World
          </p>
          <p className="px-10 relative -bottom-40 tracking-wide align-text-bottom leading-10">
            Sundarbans Mangrove Forest
          </p>
        </div>
        <div className="flex flex-row justify-end items-center w-full">
          <div className="pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={insta}
              height="auto"
              width="auto"
              className="h-auto w-full"
            />
          </div>
          <div className="pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={facebook}
              height="auto"
              width="auto"
              className="h-auto w-full"
            />
          </div>
          <div className="pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={linkedin}
              height="auto"
              width="auto"
              className="h-auto w-full"
            />
          </div>
          <div className="pr-10 hover:scale-90 duration-300 cursor-pointer transition-all delay-200 ease-out relative -bottom-44 tracking-wide align-text-bottom leading-10">
            <Image
              src={whatsapp}
              height="auto"
              width="auto"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-brandBlue h-10 text-white">
        <p className="text-center text-white text-2xl text-bold">
          © {date} JFTL
        </p>
      </div>
    </div>
  );
};

export default Footer;
