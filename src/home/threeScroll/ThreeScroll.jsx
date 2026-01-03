import React from 'react'
import ThreeScroll1 from './ThreeScroll1'
import ThreeScroll2 from './ThreeScroll2'
import ThreeScroll3 from './ThreeScroll3'

const ThreeScroll = () => {
  return (
    <div className='overflow-hidden w-screen h-[140vh]'>
        <div className='relative'>
            <div className='transform scale-[1.25] -rotate-5 translate-y-31 z-0 relative'>
                <ThreeScroll1 />
            </div>
            <div className='transform scale-[1.25] rotate-5 translate-y-46 z-2 relative'>
                <ThreeScroll2 />
            </div>
            <div className='transform scale-[1.25] -rotate-5 translate-y-46 z-1 relative'>
                <ThreeScroll3 />
            </div>
        </div>
    </div>
  )
}

export default ThreeScroll