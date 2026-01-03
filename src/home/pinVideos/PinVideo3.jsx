import React, { use, useEffect, useLayoutEffect } from "react";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const PinVideo3 = () => {


    const mainNav = useRef();
  const ViewExp = useRef();
  const ViewExpArrowCircle = useRef();
  const ViewExpArrow = useRef();
  const ViewExpArrowCircleBehind = useRef();
  const ViewExpArrowBehind = useRef();
  const viewExpAll = useRef();

  useGSAP(() => {
  const viewExp = viewExpAll.current;

  const ctx = gsap.context(() => {
    gsap.set(ViewExpArrowCircleBehind.current, { scale: 0 });

    viewExp.onmouseenter = () => {
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
        scale: 1,
        duration: 0.8,
        ease: "power3.inOut",
      });
    };

    viewExp.onmouseleave = () => {
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
        scale: 0,
        duration: 0.8,
        ease: "power3.inOut",
      });
    };
  }, viewExpAll);

  return () => ctx.revert();
});



  return (
    <div className="w-screen transfrom translate-y-61 relative h-[70vh] flex justify-center items-center">
      <div className="relative h-[80vh] w-[88vw]">
        <div className="absolute w-full h-full rounded-[50px] object-cover flex justify-center items-center overflow-hidden">
          <video
            className="scale-106"
            loop
            muted
            autoPlay
            src="./Media/Vid6.mp4"
          ></video>
        </div>

        {/* Text */}
        <div className="absolute flex flex-col bottom-12 left-10">
          <div className="bg-[#B8E3E9] h-11 w-38 flex flex-col justify-center">
            <h1 className="font-[Regular2] relative top-1 tracking-wide text-center text-4xl">
              WORKSHOPS
            </h1>
          </div>
          <div className="mt-4">
            <h1 className="text-white font-[Bold] text-7xl">
              Macaron-Making <br /> Workshop
            </h1>
          </div>
          <div className="mt-4">
            <div className="bg-[#B8E3E9] inline-block rounded-full h-11 w-30">
              <h1 className="font-[REGULAr2] relative top-1.5 text-center tracking-wider text-3xl font-light">
                2.5HOURS
              </h1>
            </div>
            <div className="bg-[#B8E3E9] inline-block rounded-full h-11 w-30">
              <h1 className="font-[REGULAr2] relative top-1.5 text-center tracking-wider text-3xl font-light">
                FROM131€
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute right-15 bottom-12">
          <div ref={viewExpAll} className="flex flex-row relative">
            <div
              ref={ViewExpArrowCircleBehind}
              className="flex flex-col justify-center origin-right scale-0"
            >
              <i
                ref={ViewExpArrowBehind}
                className="bg-[#FF7782] h-15 w-15 rounded-full flex justify-center items-center"
              >
                <RiArrowRightUpLongLine className="w-7 h-7" />
              </i>
            </div>
            <div
              ref={ViewExp}
              className="bg-white h-17 w-45 rounded-full flex flex-col justify-center "
            >
              <h1 className="text-center text-[17px] font-medium relative">
                Explore More
              </h1>
            </div>
            <div
              ref={ViewExpArrowCircle}
              className="flex flex-col justify-center origin-left"
            >
              <i
                ref={ViewExpArrow}
                className="bg-[#B8E3E9] h-15 w-15 rounded-full flex justify-center items-center"
              >
                <RiArrowRightUpLongLine className="w-7 h-7" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PinVideo3