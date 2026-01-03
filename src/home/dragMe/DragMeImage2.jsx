import React from 'react'

const DragMeImage2 = () => {
  return (
    <div>
        <div className='bg-[#D3D3FF] h-90 w-80 flex flex-col items-center justify-center gap-5'>
            <div className='h-70 w-75 flex flex-col justify-center overflow-hidden'>
                <img className='scale-[1.4]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b37c680671f554521b4ce_Macaron%20making%20workshop%20with%20paris%20by%20emily%20glasses%20and%20champagne.avif" alt="" />
            </div>

            <div className='flex gap-5 -left-4 relative'>
                <div className='h-11 w-11 rounded-full flex overflow-hidden flex-col justify-center'>
                <img className='scale-[1.58]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b368ac5a2dfc9d0ad72af_Macaron%20making%20decorating%20set%20up.avif" alt="" />
            </div>
            <div>
                <h1 className='font-[medium] text-[15px]'>Stacey, United Kingdom <br /> Macaron-Making Workshop</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DragMeImage2