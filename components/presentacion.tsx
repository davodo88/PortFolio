import React from 'react'
import TextDavid from './atoms/TextDavid'
import Image from 'next/image'
import Avatar from '../public/images/avatar.png'

const Presentacion = () => {
  return (
    <div className=" border-white flex flex-col-reverse xl:flex-row  h-[900px] justify-center">
      <div className=" m-auto flex p-5 w-[300px] md:w-[600px] justify-center ">
        <div className=" w-[500px] h-[100px] m-auto ">
          <TextDavid />
        </div>
      </div>
      <div className=" m-8 lg:m-auto flex justify-center ">
        <Image src={Avatar} width={400} height={300} alt="Avatar" />
      </div>
    </div>
  );
}

export default Presentacion