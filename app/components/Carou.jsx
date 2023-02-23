import React from 'react'
import Image from 'next/image'
//import Link from 'next/link';
import mlab1 from '../../public/mlab1.png';
import mlab2 from '../../public/mlab2.png';
import mlab3 from '../../public/mlab3.png';
import mlab4 from '../../public/mlab4.png';
import mlab5 from '../../public/mlab5.png';

const Carou = () => {
  return (
    <div className="carousel w-1/2 mt-10 h-full">
        <div id="slide1" className="carousel-item relative w-full">
            <Image src={mlab1} className="w-full object-contain" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <Image src={mlab2} className="w-full object-contain" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <p className='translate-x-1/2 translate-y-56'>Okay</p>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <Image src={mlab3} className="w-full object-contain" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <Image src={mlab4} className="w-full object-contain" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
            <Image src={mlab5} className="w-full object-contain" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
  )
}

export default Carou