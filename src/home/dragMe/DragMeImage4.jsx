import React from 'react'

const DragMeImage4 = () => {
  return (
    <div>
        <div className='bg-[#D3D3FF] h-90 w-80 flex flex-col items-center justify-center gap-5'>
            <div className='h-70 w-75 flex flex-col justify-center overflow-hidden'>
                <img className='scale-[1.4]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b532646130b9593fdcf0d_Walking%20Tour%20emily%20in%20paris%20guests%20posing%20for%20photo%20outside%20emilys%20apartment.avif" alt="" />
            </div>

            <div className='flex gap-5 -left-4 relative'>
                <div className='h-11 w-11 rounded-full flex overflow-hidden flex-col justify-center'>
                <img className='scale-[1.58]' src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b51f440b28e1c65cf70ef_Walking%20Tour%20Host%20pointing%20to%20Marius%20Status%20in%20Paris%20.avif" alt="" />
            </div>
            <div>
                <h1 className='font-[medium] text-[15px]'>Arina, France <br /> Champagne Seine Cruise</h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DragMeImage4