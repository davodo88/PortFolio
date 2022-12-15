import React from 'react'
import Image from 'next/image'
import Html5 from '../public/images/logos/htmlLogo.png'
import Css from '../public/images/logos/cssLogo.png'
import Js from '../public/images/logos/JavaScriptLogo.png'
import Rea from '../public/images/logos/ReactLogo.png'
import Tail from '../public/images/logos/TailwindLogo.png'
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";


const lenguajes = [
    {name:"HTML 5", time:"1 YEAR", logo:Html5},
    {name:"CSS 3", time:"1 YEAR", logo:Css},
    {name:"JavaScript", time:"1 YEAR", logo:Js},
    {name:"REACT", time:"1 YEAR", logo:Rea},
    {name:"Tailwind CSS", time:"1 YEAR", logo:Tail},
]

const Experiences = () => {
  return (
    <div
      id="lenguajes"
      className="flex flex-row justify-between  h-max py-16 px-32 "
    >
      {lenguajes.map((value, index) => {
        return (
          <AnimationOnScroll
            animateIn="animate__fadeInLeft animate__delay-0.8s"
            key={index}
          >
            <div className="lenguajes flex w-40 p-[40px] hover:p-[10px] transition-all rounded-lg bg-stone-300 drop-shadow-[0.5px_1px_8px_#716363f7] ">
              <Image
                src={value.logo}
                width={"1500"}
                height={"1500"}
                alt="logo"
                className="flex"
              />
            </div>
          </AnimationOnScroll>
        );
      })}
    </div>
  );
}

export default Experiences