import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      className="relative drop-shadow-[0_5px_10px_#fffffff7] bg-gradient-to-t from-slate-500 to-slate-700 
        flex flex-col h-max md:flex-row justify-center py-4 font-Code text-bone rounded-b-xl"
    >
      <ul className="hidden md:flex gap-x-10">
        {Options.map((Option, index) => {
          return (
            <li
              key={index}
              className="flex text-xl hover:scale-90 cursor-pointer"
            >
              <a href={Option.target}>{Option.title}</a>
            </li>
          );
        })}
      </ul>
      <button
        onClick={showMenu}
        className={classNames("w-max ml-4 md:hidden text-lg ", )}>
        <FontAwesomeIcon icon={menu ? faXmark : faBars } />
      </button>
      {menu && 
        <div 
            className="w-[220px] h-[270px] 
            bg-slate-300/25 rounded-xl backdrop-blur-sm
            absolute top-20 left-[22%] flex justify-center">
            <ul className='flex flex-col text-start'>
            {Options.map((value, index) => {
                return (
                  <li
                    key={index}
                    className="flex my-auto hover:scale-90 text-xl"
                  >
                    <a href={value.target}>{value.title}</a>
                  </li>
                );
            })}
            </ul>
        </div>
      }
    </div>
  );
}

export default NavBar