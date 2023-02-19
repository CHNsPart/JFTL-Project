import React from 'react'
import Image from 'next/image'
import C1 from "../../public/C1.jpeg"
import C2 from "../../public/C2.jpeg"
import C3 from "../../public/C3.jpeg"
import C4 from "../../public/C4.jpeg"
import C5 from "../../public/C5.jpeg"

const Certification = () => {
  return (
    <div className='h-fit w-full py-10 bg-transparent'>
        <div className='h-1/2 flex justify-center items-center flex-col w-full bg-transparent text-center'>
            <h1 className='text-7xl text-bold font-black text-brandBlue mb-5'>
                We Are Certified
            </h1>
            <div className='w-1/2 grid grid-cols-5 gap-5'>
                <Image src={C1} />
                <Image src={C2} />
                <Image src={C5} />
                <Image src={C3} />
                <Image src={C4} />
            </div>
        </div>
    </div>
  )
}

export default Certification