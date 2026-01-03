import React from 'react'

const DragMeImage5 = () => {
  return (
    <div>
        <div className='bg-[#D3D3FF] h-90 w-80 flex flex-col items-center justify-center gap-5'>
            <div className='h-70 w-75 flex flex-col justify-center overflow-hidden'>
                <img className='scale-[1.4]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b9f803e7f9d02b0efa58a_Wine%20and%20cheese%20tasting%20paris%20by%20emily%20board%20and%20cheese.avif" alt="" />
            </div>

            <div className='flex gap-5 -left-4 relative'>
                <div className='h-11 w-11 rounded-full flex overflow-hidden flex-col justify-center'>
                <img className='scale-[1.58]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b9f6e8769bced80a363c7_Wine%20and%20cheese%20tasting%20laughing.avif" alt="" />
            </div>
            <div>
                <h1 className='font-[medium] text-[15px]'>Elsa, United Kingdom <br /> Wine, Cheese & Butter Tasting</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DragMeImage5