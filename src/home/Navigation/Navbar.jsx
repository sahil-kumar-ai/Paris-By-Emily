import React, { use, useEffect, useLayoutEffect } from "react";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { RiColorFilterFill } from "@remixicon/react";
import { RiCircleFill } from "@remixicon/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
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

  useEffect(() => {
    if (mainNav.current) {
      gsap.set(mainNav.current, { opacity: 0, y: -50 });
      const timer = setTimeout(() => {
        gsap.to(mainNav.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
      }, 5350);

      return () => clearTimeout(timer);
    }
  }, []);


  useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

  tl.from(headerLogo.current, {
    y: -80,
    opacity: 0,
    duration: 1,
  })
  .from(
    brandText.current,
    {
      y: -80,
      opacity: 0,
      duration: 1,
    },
    "<30%" 
  )
  .from(
    viewExpAll.current,
    {
      y: -80,
      opacity: 0,
      duration: 1,
    },
    "<30%"
  );
}, []);


  useGSAP(() => {
    headerLogo.current.addEventListener("mouseenter", () => {
      gsap.killTweensOf([Logo.current, afterLogo.current, redHover.current]);

      gsap.to(Logo.current, {
        scale: 0.2,
        duration: 0.5,
        ease: "power2.out",
        rotate: 180,
      });

      gsap.to(afterLogo.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(redHover.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        opacity: 0,
      });

      gsap.to(".TextSpan", {
        y: -30,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      });

      gsap.to(".TextSpanBottom", {
        y: -30,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
      });
    });

    headerLogo.current.addEventListener("mouseleave", () => {
      gsap.killTweensOf([Logo.current, afterLogo.current, redHover.current]);

      gsap.to(Logo.current, {
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        rotate: 0,
      });

      gsap.to(afterLogo.current, {
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(redHover.current, {
        scale: 0,
        opacity: 0.4,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(".TextSpan", {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      });

      gsap.to(".TextSpanBottom", {
        y: 2,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      });
    });
  });

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

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: "top top",
  onUpdate: (self) => {
    if (self.direction === 1) {
      gsap.to(mainNav.current, {
        y: -100,
        duration: 1,
        ease: "power4.inOut"
      });
    } else {
      gsap.to(mainNav.current, {
        y: 0,
        duration: 1,
        ease: "power3.inOut"
      });
    }
  }
});




  return (
    <>
      <div ref={mainNav} className="flex flex-row z-999 justify-between items-center w-screen px-8 fixed overflow-hidden h-29 top-0">
        <div
          ref={headerLogo}
          className="flex flex-row justify-center gap-3 transform translate-x-3"
        >
          <div className="bg-white opacity- h-15 w-15 rounded-full flex justify-center items-center">
            <i ref={Logo} className="relative">
              <RiColorFilterFill className="w-6 h-6" />
            </i>
            <i ref={afterLogo} className="absolute scale-0 opacity-100">
              <RiCircleFill className="w-4 h-4" />
            </i>
            <div
              ref={redHover}
              className="bg-red-600 scale-0 rounded-full h-15 w-15 opacity-100 absolute"
            ></div>
          </div>

          <div className="flex flex-col justify-center h-8 top-4 relative overflow-hidden">
            <h1
              ref={menuText}
              className="flex text-white font-medium mb-2 text-lg top-3.5 relative font-[Medium]"
            >
              {["M", "e", "n", "u"].map((letter, i) => (
                <span key={i} className="TextSpan inline-block relative">
                  {letter}
                </span>
              ))}
            </h1>

            <h1
              ref={menuTextBottom}
              className="flex text-white font-medium relative top-3.5 text-lg font-[Medium]"
            >
              {["M", "e", "n", "u"].map((letter, i) => (
                <span key={i} className="TextSpanBottom inline-block relative">
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="pl-42">
          <h1 ref={brandText} className="font-[Regular] tracking-normal text-4xl -top-2 relative font-bold transform text-white scale-Y-[100px]">
            PARIS BY EMILY
          </h1>
        </div>

        <div ref={viewExpAll} className="flex flex-row relative right-4">
          <div ref={ViewExpArrowCircleBehind} className="flex flex-col justify-center origin-right scale-0">
            <i ref={ViewExpArrowBehind} className="bg-[#D3D3FF] h-15 w-15 rounded-full flex justify-center items-center">
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
    </>
  );
};

export default Navbar;
