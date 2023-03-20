import React from 'react'
import Image from 'next/image';
import PhotoMac from '../public/images/hero/fotoMac.jpg'





const Hero = () => {
  return (
    <div id='hero'  
      className='scroll-smooth w-full h-[900px] my-28'>
      <div className='h-1/2 overflow-visible flex flex-col md:flex-row'>
        <div className='h-full md:h-[850px] md:w-1/2 mx-auto flex flex-col px-10 pt-20 pb-10'>
          <h1 className='text-center text-xl mb-10'>
            I´m a <span className='font-black'>FrontEnd</span> developer
          </h1>
          <Image 
            src={PhotoMac} 
            width={450} 
            height={700} 
            alt="" 
            className='rounded'
            />
        </div>
        <div className='h-full md:h-[850px] md:w-1/2 mx-auto flex flex-col px-10 pt-20 pb-10'>
          <Image 
            src={PhotoMac} 
            width={450} 
            height={700} 
            alt=""
            className='rounded' />
          <h1 className='text-center text-xl my-5'>
            Lorem ipsum dolor sit amet.
          </h1>
          <button className='border-[1px] w-max mx-auto px-6 py-2 rounded 
            shadow-sm hover:shadow-inner shadow-black hover:shadow-black'>
            <a href='#templates'> see more </a>
          </button>  
        </div>
      </div>
      <div className='w-full h-1/2 bg-neutral-200'></div>
    </div>
  )
}

export default Hero