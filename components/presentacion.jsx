import React from 'react'
import Image from 'next/image'
import TextDavid from './atoms/TextDavid'
import Avatar from '../public/images/presentation/barcoVikingo.jpg'


const Presentacion = () => {
  return (
    <div id='presentacion' className="scroll-smooth w-full h-[600px] ">
      <div className='flex flex-col w-full h-full m-auto gap-y-20'>
        <div className='w-full h-1/2 bg-neutral-200 relative'>
          <div className='w-full h-48 -bottom-10 md:-bottom-5 absolute mt-20'>
            <div className='mx-auto w-48 md:w-56 h-48 md:h-56 border-4 border-black 
            rounded-full shadow-md shadow-black/50'>
              <Image src={Avatar}
                width={1050}
                height={1050}
                alt="my Avatar"
                className='flex rounded-full m-auto w-32 md:w-40 h-32 md:h-40' />
            </div>
          </div>
        </div>
        <TextDavid />
        <button className='border-[1px] w-max mx-auto px-6 py-2 rounded 
            shadow-sm hover:shadow-inner shadow-black hover:shadow-black'> 
          <a href='#hero'>
            see more
          </a>
        </button>
      </div>
    </div>
  );
}

export default Presentacion