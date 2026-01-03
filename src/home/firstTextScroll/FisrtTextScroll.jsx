import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FisrtTextScroll = () => {
  const first = useRef();
  const second = useRef();
  const third = useRef();

  let xPercent = 0;
  let direction = 1; 
  const speed = 0.05;

  useEffect(() => {

    const setX = gsap.quickSetter([first.current, second.current, third.current], "xPercent");

    let lastScroll = window.scrollY;
    const onScroll = () => {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;

      if (delta > 0) direction = 1;
      else if (delta < 0) direction = -1;
    };
    window.addEventListener("scroll", onScroll);

    gsap.ticker.add(() => {
      if (xPercent <= -121.2) xPercent = 0;
      if (xPercent > 0) xPercent = -121.2;

      setX(xPercent);
      xPercent += speed * direction;
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="w-screen -translate-y-20 transform overflow-hidden h-75 flex items-center">
      <div className="flex w-max gap-32 items-center">
        {/* ITEM */}
        <div ref={first} className="flex items-center gap-35">
          <h1 className="font-[BOLD] text-[135px] whitespace-nowrap">
            Discover experiences
          </h1>
          <img
            src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf07824442bd8b0d70869_sticker-montmartre-tour.avif"
            className="w-30 h-auto scale-250"
            alt=""
          />
        </div>

        {/* DUPLICATE */}
        <div ref={second} className="flex items-center transform translate-x-32 gap-35">
          <h1 className="font-[BOLD] text-[135px] whitespace-nowrap">
            Discover experiences
          </h1>
          <img
            src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf07824442bd8b0d70869_sticker-montmartre-tour.avif"
            className="w-30 h-auto scale-250"
            alt=""
          />
        </div>

        <div ref={third} className="flex items-center transform translate-x-64 gap-35">
          <h1 className="font-[BOLD] text-[135px] whitespace-nowrap">
            Discover experiences
          </h1>
          <img
            src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf07824442bd8b0d70869_sticker-montmartre-tour.avif"
            className="w-30 h-auto scale-250"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FisrtTextScroll;
