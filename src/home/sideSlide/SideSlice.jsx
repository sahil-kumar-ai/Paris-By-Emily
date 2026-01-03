import React, { useRef } from 'react'
import SideSlideMiddle from './SideSlideMiddle'
import SideSliceRight from './SideSliceRight'
import SideSlideLeft from './SideSlideLeft'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const SideSlice = () => {

  const container = useRef()
  const middle = useRef()
  const right = useRef()
  const left = useRef()

  useGSAP(() => {

    gsap.timeline({
      scrollTrigger: {
        trigger: middle.current,
        start: "top bottom",
        end: "top 0%",
        scrub: true,
      }
    })
    .to(right.current, {
      x: -650,
      ease: "none",
      rotate: 5,
      y: -30,
    }, 0)
    .to(left.current, {
      x: 650,
      ease: "none",
      rotate: -5,
      y: -30,
    }, 0)

    ScrollTrigger.create({
      trigger: container.current,
      start: "top -2%",
      end: "+=600",
      pin: true,
    })

  }, { scope: container })

  return (
    <div
      ref={container}
      className='h-screen w-screen flex justify-center items-center relative top-66'
    >
      <div className='h-[92vh] rounded-[50px] bg-[#D3D3FF] w-[90vw] flex justify-center items-center'>
        <div ref={middle}>
          <SideSlideMiddle />
        </div>
      </div>

      <div ref={right} className='absolute flex justify-center items-center origin-top-left'>
        <SideSliceRight />
      </div>

      <div ref={left} className='absolute flex justify-center items-center origin-top-right'>
        <SideSlideLeft />
      </div>
    </div>
  )
}

export default SideSlice
