import React, { useState } from 'react'
import Image from 'next/image'
import HtmlLogo from '../public/images/logos/htmlLogo.png'
import CssLogo from '../public/images/logos/csslogo.png'
import jsLogo from '../public/images/logos/JavaScriptLogo.png'
import ReactLogo from '../public/images/logos/ReactLogo.png'
import tailwindLogo from '../public/images/logos/TailwindLogo.png'
import GitLogo from '../public/images/logos/gitHubLogo.png'
import { classNames } from '../utils/utils'
import { AnimatePresence, motion } from "framer-motion"


const tecnologies = [
  { "logo": HtmlLogo },
  { "logo": CssLogo },
  { "logo" : jsLogo },
  { "logo": ReactLogo },
  { "logo": tailwindLogo },
]


const Tecnologies = () => {

  const [skills, setSkills] = useState(false)

  const showSkills = () => {
    skills ? setSkills(false) : setSkills(true)
  }

  return (
    <motion.div layout 
      className='w-full h-[450px] relative flex justify-center items-center border-2 transition-all'>
      <motion.button onClick={showSkills} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='shadow-md bg-neutral-100 px-6 py-2 rounded'>
        <h1 className='w-max h-max m-auto'>My Skills</h1>
      </motion.button>
        <AnimatePresence>
          { skills && (
          <motion.span 
          initial={{
            scale:0.5
          }}
          animate= {{
            translateY : [-150],
            translateX : [-150],
            scale: 1.5
          }}
            className={classNames(
              "absolute top-50 transition-all duration-1000 ease-in-out -z-10 w-12 h-12",
            )}>
            <Image src={HtmlLogo} alt="logo" />
          </motion.span>
          )}
        </AnimatePresence>

          
          <span className={classNames(
            "absolute top-0 transition-all delay-100 duration-1000 ease-in-out -z-10 w-12 h-12",
            skills ? "top-[15%] md:top-[45%] left-[45%] md:left-[35%]" : "top-[50%] left-1/2"
          )}>
            <Image src={CssLogo} alt="logo" />
          </span>


          <span className={classNames(
            "absolute top-0 transition-all delay-200 duration-1000 ease-in-out -z-10 w-12 h-12",
            skills ? "top-[15%] md:top-[80%] left-[80%] md:left-[40%]" : "top-[50%] left-1/2"
          )}>
        <Image src={jsLogo} alt="logo" />
          </span>


          <span className={classNames(
            "absolute top-0 transition-all delay-300 duration-1000 ease-in-out -z-10 w-12 h-12",
            skills ? "top-[80%] left-[10%] md:top-[80%] md:left-[57%]" : "top-[50%] left-1/2"
          )}>
        <Image src={ReactLogo} alt="logo" />
          </span>


          <span className={classNames(
            "absolute top-0 transition-all delay-500 duration-1000 ease-in-out -z-10 w-12 h-12",
            skills ? "top-[80%] md:top-[45%] left-[45%] md:left-[62%]" : "top-[50%] left-1/2"
          )}>
        <Image src={tailwindLogo} alt="logo" />
          </span>

          
          <span className={classNames(
            "absolute top-0 transition-all delay-700 duration-1000 ease-in-out -z-10 w-12 h-12",
            skills ? "top-[80%] md:top-[15%] left-[80%] md:left-[57%]" : "top-[50%] left-1/2"
          )}>
            <Image src={GitLogo} alt="logo" />
          </span>
    </motion.div>
  )
}

export default Tecnologies