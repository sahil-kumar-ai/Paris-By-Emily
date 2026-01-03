import React from 'react'

const DragMeImage3 = () => {
  return (
    <div>
        <div className='bg-[#D3D3FF] h-90 w-80 flex flex-col items-center justify-center gap-5'>
            <div className='h-70 w-75 flex flex-col justify-center overflow-hidden'>
                <img className='scale-[1.4]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b72fbb66c0333480d311c_Seine%20Cruise%20Macarons%20Polaroid.avif" alt="" />
            </div>

            <div className='flex gap-5 -left-4 relative'>
                <div className='h-11 w-11 rounded-full flex overflow-hidden flex-col justify-center'>
                <img className='scale-[1.58]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b724c40b28e1c65e3a118_Seine%20Cruise%20macarons%20and%20champagne.avif" alt="" />
            </div>
            <div>
                <h1 className='font-[medium] text-[15px]'>Katie, United Kingdom <br />Walk in the footsteps of Emily </h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DragMeImage3