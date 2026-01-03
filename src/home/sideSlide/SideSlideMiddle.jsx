import React, { use, useEffect, useLayoutEffect } from "react";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { RiColorFilterFill } from "@remixicon/react";
import { RiCircleFill } from "@remixicon/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SideSlideMiddle = () => {

      const mainNav = useRef();
      const brandText = useRef();
    
      const Logo = useRef();
      const afterLogo = useRef();
      const redHover = useRef();
      const headerLogo = useRef();
      const menuText = useRef();
      const menuTextBottom = useRef();
      const ViewExp = useRef();
      const ViewExpArrowCircle = useRef();
      const ViewExpArrow = useRef();
      const ViewExpArrowCircleBehind = useRef();
      const ViewExpArrowBehind = useRef();
      const viewExpAll = useRef();

       useGSAP(() => {
  const viewExp = viewExpAll.current;

  viewExp.addEventListener("mouseenter", () => {

    gsap.to(ViewExpArrow.current, {
      rotate: 40,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(ViewExpArrowCircle.current, {
      scale: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(viewExp, {
      x: 65,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(ViewExpArrowBehind.current, {
      rotate: 40,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(ViewExpArrowCircleBehind.current, {
      scale:1,
      duration: 0.8,
      ease: "power3.inOut",
    });
  });

  viewExp.addEventListener("mouseleave", () => {

    gsap.to(ViewExpArrow.current, {
      rotate: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(ViewExpArrowCircle.current, {
      scale: 1,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(viewExp, {
      x: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(ViewExpArrowBehind.current, {
      rotate: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });

    gsap.to(ViewExpArrowCircleBehind.current, {
      scale:0,
      duration: 0.8,
      ease: "power3.inOut",
    });
  });
});


  return (
    <div className='h-[92vh] w-[90vw]'>
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='flex justify-center relative -top-11'>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-[#666666]' width="7%" viewBox="0 0 20 20" fill="none" class="g_svg">\
                <path d="M9.53792 1.10974C9.70872 0.699097 10.2905 0.699097 10.4613 1.10974L12.5274 6.07722C12.5994 6.25034 12.7622 6.36863 12.9491 6.38361L18.3119 6.81354C18.7552 6.84908 18.935 7.40234 18.5972 7.69167L14.5113 11.1917C14.3689 11.3137 14.3067 11.5051 14.3502 11.6874L15.5985 16.9206C15.7017 17.3532 15.2311 17.6952 14.8515 17.4633L10.2602 14.659C10.1002 14.5613 9.89896 14.5613 9.73895 14.659L5.14764 17.4633C4.76809 17.6952 4.29746 17.3532 4.40066 16.9206L5.64897 11.6874C5.69247 11.5051 5.63028 11.3137 5.48789 11.1917L1.40199 7.69167C1.06422 7.40234 1.24399 6.84908 1.68731 6.81354L7.05012 6.38361C7.23702 6.36863 7.39982 6.25034 7.47183 6.07722L9.53792 1.10974Z" fill="currentColor"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className=' text-[#666666]' width="7%" viewBox="0 0 20 20" fill="none" class="g_svg">\
                <path d="M9.53792 1.10974C9.70872 0.699097 10.2905 0.699097 10.4613 1.10974L12.5274 6.07722C12.5994 6.25034 12.7622 6.36863 12.9491 6.38361L18.3119 6.81354C18.7552 6.84908 18.935 7.40234 18.5972 7.69167L14.5113 11.1917C14.3689 11.3137 14.3067 11.5051 14.3502 11.6874L15.5985 16.9206C15.7017 17.3532 15.2311 17.6952 14.8515 17.4633L10.2602 14.659C10.1002 14.5613 9.89896 14.5613 9.73895 14.659L5.14764 17.4633C4.76809 17.6952 4.29746 17.3532 4.40066 16.9206L5.64897 11.6874C5.69247 11.5051 5.63028 11.3137 5.48789 11.1917L1.40199 7.69167C1.06422 7.40234 1.24399 6.84908 1.68731 6.81354L7.05012 6.38361C7.23702 6.36863 7.39982 6.25034 7.47183 6.07722L9.53792 1.10974Z" fill="currentColor"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className='text-[#666666]' width="7%" viewBox="0 0 20 20" fill="none" class="g_svg">\
                <path d="M9.53792 1.10974C9.70872 0.699097 10.2905 0.699097 10.4613 1.10974L12.5274 6.07722C12.5994 6.25034 12.7622 6.36863 12.9491 6.38361L18.3119 6.81354C18.7552 6.84908 18.935 7.40234 18.5972 7.69167L14.5113 11.1917C14.3689 11.3137 14.3067 11.5051 14.3502 11.6874L15.5985 16.9206C15.7017 17.3532 15.2311 17.6952 14.8515 17.4633L10.2602 14.659C10.1002 14.5613 9.89896 14.5613 9.73895 14.659L5.14764 17.4633C4.76809 17.6952 4.29746 17.3532 4.40066 16.9206L5.64897 11.6874C5.69247 11.5051 5.63028 11.3137 5.48789 11.1917L1.40199 7.69167C1.06422 7.40234 1.24399 6.84908 1.68731 6.81354L7.05012 6.38361C7.23702 6.36863 7.39982 6.25034 7.47183 6.07722L9.53792 1.10974Z" fill="currentColor"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className='text-[#666666]' width="7%" viewBox="0 0 20 20" fill="none" class="g_svg">\
                <path d="M9.53792 1.10974C9.70872 0.699097 10.2905 0.699097 10.4613 1.10974L12.5274 6.07722C12.5994 6.25034 12.7622 6.36863 12.9491 6.38361L18.3119 6.81354C18.7552 6.84908 18.935 7.40234 18.5972 7.69167L14.5113 11.1917C14.3689 11.3137 14.3067 11.5051 14.3502 11.6874L15.5985 16.9206C15.7017 17.3532 15.2311 17.6952 14.8515 17.4633L10.2602 14.659C10.1002 14.5613 9.89896 14.5613 9.73895 14.659L5.14764 17.4633C4.76809 17.6952 4.29746 17.3532 4.40066 16.9206L5.64897 11.6874C5.69247 11.5051 5.63028 11.3137 5.48789 11.1917L1.40199 7.69167C1.06422 7.40234 1.24399 6.84908 1.68731 6.81354L7.05012 6.38361C7.23702 6.36863 7.39982 6.25034 7.47183 6.07722L9.53792 1.10974Z" fill="currentColor"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className='text-[#666666]' width="7%" viewBox="0 0 20 20" fill="none" class="g_svg">\
                <path d="M9.53792 1.10974C9.70872 0.699097 10.2905 0.699097 10.4613 1.10974L12.5274 6.07722C12.5994 6.25034 12.7622 6.36863 12.9491 6.38361L18.3119 6.81354C18.7552 6.84908 18.935 7.40234 18.5972 7.69167L14.5113 11.1917C14.3689 11.3137 14.3067 11.5051 14.3502 11.6874L15.5985 16.9206C15.7017 17.3532 15.2311 17.6952 14.8515 17.4633L10.2602 14.659C10.1002 14.5613 9.89896 14.5613 9.73895 14.659L5.14764 17.4633C4.76809 17.6952 4.29746 17.3532 4.40066 16.9206L5.64897 11.6874C5.69247 11.5051 5.63028 11.3137 5.48789 11.1917L1.40199 7.69167C1.06422 7.40234 1.24399 6.84908 1.68731 6.81354L7.05012 6.38361C7.23702 6.36863 7.39982 6.25034 7.47183 6.07722L9.53792 1.10974Z" fill="currentColor"></path>
                </svg>
            </div>

            <div className='relative -top-12'>
                <div className='text-center'>
                <h1 className='text-[#1A1A1A] font-[REGULAR2] text-[43px]'>
                    Danielle, Netherlands
                </h1>
            </div>

            <div className='text-center font-[REGULAR] text-[45px] relative top-7 leading-15'>
                <h1>
                    It was such a joyful and affirming <br /> experience. Thank you, Guillaume, <br /> for such a memorable and <br /> enriching workshop. We can’t <br /> recommend it highly enough!
                </h1>
            </div>
            </div>

            <div ref={viewExpAll} className="flex flex-row relative right-4 top-5 scale-[0.9]">
          <div ref={ViewExpArrowCircleBehind} className="flex flex-col justify-center origin-right scale-0">
            <i ref={ViewExpArrowBehind} className="bg-[#B8E3E9] h-15 w-15 rounded-full flex justify-center items-center">
              <RiArrowRightUpLongLine className="w-7 h-7" />
            </i>
          </div>
          <div ref={ViewExp} className="bg-white h-17 w-54 rounded-full flex flex-col justify-center ">
            <h1 className="text-center text-[17px] font-medium relative">
            View Experiences
          </h1>
          </div>
          <div ref={ViewExpArrowCircle} className="flex flex-col justify-center origin-left">
            <i ref={ViewExpArrow} className="bg-[#FF7782] h-15 w-15 rounded-full flex justify-center items-center">
              <RiArrowRightUpLongLine className="w-7 h-7" />
            </i>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SideSlideMiddle