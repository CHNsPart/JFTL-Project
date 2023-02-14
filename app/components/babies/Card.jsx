import React from 'react';
import { FaFeatherAlt } from 'react-icons/fa';

const icoName = 'FaFeatherAlt';

const Card = () => {
  return (
    <div className="w-full flex flex-col justify-center justify-self-start items-center">
      <div className="w-[30rem] px-10">
        <div className="h-16 w-16 bg-white shadow-xl flex justify-center items-center mb-5 rounded-full text-left border-2 border-sky-200">
          <FaFeatherAlt size={20} className="text-sky-500" />
        </div>
      </div>
      <p className="text-left text-lg px-10 w-[30rem]">
        A Joint Venture between Japan & Bangladesh
      </p>
    </div>
  );
};

export default Card;
