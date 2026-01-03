
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


const DragMetext = () => {

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
    <div className='relative flex justify-center items-center'>
        <div className='relative'>
                <h1 className='font-[BOLD] leading-75 text-[290px] text-center'>WALL <br /> OF <br /> LOVE</h1>
        </div>

        <div ref={viewExpAll} className="flex flex-row absolute">
          <div ref={ViewExpArrowCircleBehind} className="flex flex-col justify-center origin-right scale-0">
            <i ref={ViewExpArrowBehind} className="bg-[#D3D3FF] h-30 w-30 rounded-full flex justify-center items-center">
              <RiArrowRightUpLongLine className="w-15 h-15" />
            </i>
          </div>
          <div ref={ViewExp} className="bg-white h-30 w-74 rounded-full flex flex-col justify-center ">
            <h1 className="text-center text-[40px] font-medium relative">
            Book Now
          </h1>
          </div>
          <div ref={ViewExpArrowCircle} className="flex flex-col justify-center origin-left">
            <i ref={ViewExpArrow} className="bg-[#FF7782] h-30 w-30 rounded-full flex justify-center items-center">
              <RiArrowRightUpLongLine className="w-15 h-15" />
            </i>
          </div>
        </div>


    </div>
  )
}

export default DragMetext