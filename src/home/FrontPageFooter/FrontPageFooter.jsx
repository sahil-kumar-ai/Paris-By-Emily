import React, { useRef, useEffect } from 'react';
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { gsap } from 'gsap';

const FrontPageFooter = () => {
  const leftText = useRef(null);
  const rightText = useRef(null);
  const viewExpFooter = useRef(null);
  const viewExptextFooter = useRef(null);
  const viewExpArrowFooter = useRef(null);
  const viewExpCircleFooter = useRef(null);
  const viewExpArrowFooterBehind = useRef(null);
  const viewExpCircleFooterBehind = useRef(null);

  useEffect(() => {
    gsap.set([leftText.current, rightText.current, viewExpFooter.current], { opacity: 0, y: 80 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!leftText.current || !rightText.current || !viewExpFooter.current) return;

      let tl = gsap.timeline();
      tl.to(leftText.current, {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
      });
      tl.to(rightText.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      }, "-=0.88");
      tl.to(viewExpFooter.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      }, "-=0.85");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const enter = () => {
      gsap.to(viewExpArrowFooter.current, { rotation: 40, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExpCircleFooter.current, { scale: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExptextFooter.current, { x: 72, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExpArrowFooterBehind.current, { rotation: 45, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExpCircleFooterBehind.current, { scale: 1, duration: 0.8, ease: "power3.inOut" });
    };

    const leave = () => {
      gsap.to(viewExpArrowFooter.current, { rotation: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExpCircleFooter.current, { scale: 1, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExptextFooter.current, { x: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExpArrowFooterBehind.current, { rotation: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExpCircleFooterBehind.current, { scale: 0, duration: 0.8, ease: "power3.inOut" });
    };

    viewExpFooter.current?.addEventListener('mouseenter', enter);
    viewExpFooter.current?.addEventListener('mouseleave', leave);

    return () => {
      viewExpFooter.current?.removeEventListener('mouseenter', enter);
      viewExpFooter.current?.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div className='flex justify-around w-screen'>
      <div className='h-80 flex justify-center items-center w-160 p-3 transform -translate-x-25 overflow-hidden translate-y-4'>
        <h1 ref={leftText} className='font-[Regular] text-white text-[99px] leading-23 font-extrabold scale-115'>
          Live the Paris <br /> you've only <br /> seen on screen
        </h1>
      </div>

      <div className='flex flex-col mt-14 w-100 transform -translate-y-10'>
        <div className='overflow-hidden'>
          <h1 ref={rightText} className='font-[Regular] font-medium tracking-wide leading-15 text-[40px] mt-7 text-white'>
            Created for people who <br /> dream of Paris- and want <br /> to live it, not just visit
          </h1>
        </div>

        <div className='overflow-hidden'>
          <div ref={viewExpFooter} className='bg-white rounded-full h-20 w-70 flex flex-col justify-center mt-5'>
            <div className='flex flex-row justify-around transform translate-x-4 relative'>
              <div ref={viewExpCircleFooterBehind} className='bg-[#B8E3E9] scale-0 origin-left h-15 w-15 rounded-full absolute -left-2.5 flex justify-center items-center'>
                <i ref={viewExpArrowFooterBehind}><RiArrowRightUpLongLine className='w-7 h-7' /></i>
              </div>
              <div ref={viewExptextFooter} className='flex flex-col justify-center'>
                <h1 className='text-center transform -translate-x-1 font-semibold text-lg'>View Experience</h1>
              </div>
              <div ref={viewExpCircleFooter} className='bg-[#D3D3FF] origin-right h-15 w-15 rounded-full flex justify-center items-center'>
                <i ref={viewExpArrowFooter}><RiArrowRightUpLongLine className='w-7 h-7' /></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FrontPageFooter;
