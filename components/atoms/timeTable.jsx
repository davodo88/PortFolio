import React from 'react'



const TimeTable = () => {
    
    

    const study = [
        {id:"HTML 5", value:80},
        {id:"CSS 3", value:75},
        {id:"JAVASCRIPT", value:60},
        {id:"REACT", value:70},
        {id:"TAILWIND", value:80},
    ]


    return (
        <>
        <div className='grid grid-cols-3'>
            {study.map((len, index) => {
                return (
                    <div key={index} className="flex justify-between mx-auto my-1 px-8 py-4 w-[400px] bg-bone shadow-inner shadow-black/75 rounded">
                        <p className='flex'>
                            {len.id}
                        </p>
                        <progress 
                            max="100" 
                            value={len.value} 
                            className="flex">
                        </progress>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default TimeTable