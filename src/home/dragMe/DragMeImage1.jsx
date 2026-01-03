import React from 'react'

const DragMeImage1 = () => {
  return (
    <div>
        <div className='bg-[#D3D3FF] h-90 w-80 flex flex-col items-center justify-center gap-5'>
            <div className='h-70 w-75 flex flex-col justify-center overflow-hidden'>
                <img className='scale-[1.4]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b337272a9ef60b1468da1_Croissant%20making%20three%20guests%20cutting%20the%20pastry%20.avif" alt="" />
            </div>

            <div className='flex gap-5 -left-4 relative'>
                <div className='h-11 w-11 rounded-full flex overflow-hidden flex-col justify-center'>
                <img className='scale-[1.58]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b33b8c5a2dfc9d0ab3294_Croissant%20making%20three%20guests%20spreading%20flour.avif" alt="" />
            </div>
            <div>
                <h1 className='font-[medium] text-[15px]'>Christoper, United States <br /> Crossiant-Making Workshop</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DragMeImage1