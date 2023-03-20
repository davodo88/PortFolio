import React from 'react'
import { motion } from "framer-motion"

const AnimateLeng = () => {
  return (
    <motion.div layout transition={{ duration: 0.5 }}
    className='w-full h-[500px] border-2 
      flex justify-center items-center'>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      className="shadow-md bg-neutral-100 px-6 py-2 rounded">
        show  
      </motion.button>
    </motion.div>
  )
}

export default AnimateLeng