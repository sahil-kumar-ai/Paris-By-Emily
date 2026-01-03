import React from 'react'
import SVGThirdpage from './SVGThirdpage'
import ThirdPageParallax from './ThirdPageParallax1'
import ThirdPageParallax1 from './ThirdPageParallax1'
import ThirdPageParallax2 from './ThirdPageParallax2'
import ThirdPageParallax4 from './ThirdPageParallax4'
import ThirdPageParallax3 from './ThirdPageParallax3'
import SVGStar from './SVGStar'


const Thirdpage = () => {
  return (
    
    <div className='top-1.5 h-[200vh] w-screen relative'>
        <div className='absolute -top-8 -left-6'>
            <SVGThirdpage />
        </div>
        <div className='absolute left-[23%] top-38'>
            <ThirdPageParallax1 />
        </div>
        <div className='z-2 absolute top-130 left-55'>
            <ThirdPageParallax2 />
        </div>
        <div className='z-2 absolute top-75 right-55'>
            <ThirdPageParallax3 />
        </div>
        <div className='z-2 absolute top-250 left-[29%]'>
            <ThirdPageParallax4 />
        </div>
        <div className='z-2 absolute top-205 right-35'>
            <SVGStar />
        </div>
    </div>
  )
}

export default Thirdpage