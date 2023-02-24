import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react'
import { classNames } from '../utils/utils';



const Options = [
    {title:"Home", target:"/"},
    {title:"Experiences", target:"#lenguajes"},
    {title:"Works", target:"/works"},
    {title:"Contact", target:"/contact"},
]




const NavBar = () => {

    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        menu ? setMenu(false) : setMenu(true)
    };

 

  return (
    <div
      className={
        classNames("drop-shadow-lg shadow-slate-50 bg-zinc-800 text-white w-screen h-16 rounded-br-xl sticky -top-12",)}
    >
      <h1 className='absolute left-5 top-5 m-auto w-max hover:underline'>
        David.SR
      </h1>
      <button
        onClick={showMenu}
        className={classNames("w-max absolute right-5 top-5 text-lg text-white",
          menu ? "" : "" )}>
        <FontAwesomeIcon icon={menu ? faXmark : faBars } />
      </button>
        <div 
            className={classNames(
              "absolute top-0 z-10 transition-all duration-1000 ease-in-out  bg-zinc-800 text-white w-1/2 md:w-1/3 h-96 mt-16 rounded-br-xl",
              menu ? "left-0" : "-left-full" )}>
            <ul className='flex flex-col h-full w-1/2 mx-auto justify-evenly items-center hover:bg-red-500'>
            {Options.map((value, index) => {
                return (
                  <li
                    key={index}
                    className="flex hover:underline text-xl md:text-2xl"
                  >
                    <a href={value.target}>{value.title}</a>
                  </li>
                );
            })}
            </ul>
        </div>
      
    </div>
  );
}

export default NavBar