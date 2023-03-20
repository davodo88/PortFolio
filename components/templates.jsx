import React from 'react'
import Image from 'next/image'
import Temp1 from '../public/images/works/template1.png'
import Temp2 from '../public/images/works/template2.png'
import Temp3 from '../public/images/works/template3.png'
import Temp4 from '../public/images/works/template4.png'


const projects = [
  { "image": Temp1, "number": 1, "url": "https://template1-beta.vercel.app/" },
  { "image": Temp2, "number": 2, "url": 'https://template-2-roan.vercel.app/' },
  { "image": Temp3, "number": 3, "url": 'https://template-3-beta.vercel.app/' },
  { "image": Temp4, "number" : 4, "url": 'https://template4-three.vercel.app/' }
]



const Templates = () => {
  return (
    <div id='templates'
    className='w-full h-max p-10 '>
      <h1 className='text-center text-3xl '>
        my <span className='font-bold '>W</span>orks
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-8'>
        {projects.map((template, index) => {
          return (
            <button key={index} 
            className="p-4 shadow-lg transition-all 
            hover:scale-105 relative group">
              <a href={ template.url }>
              <Image src={template.image} 
                width={""} 
                height={""} 
                alt="Templates"
                className='object-cover drop-shadow-xl ' />
              </a>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Templates