import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ThreeScroll1 = () => {
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const slider = useRef();

  let xPercent = 0;
  let direction = 1;
  const speed = 0.025;

  useEffect(() => {
    const setX = gsap.quickSetter(
      [first.current, second.current, third.current],
      "xPercent"
    );

    let lastScroll = window.scrollY;
    const onScroll = () => {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;

      if (delta > 0) direction = 1;
      else if (delta < 0) direction = -1;
    };

    window.addEventListener("scroll", onScroll);

    const tick = () => {
      if (xPercent <= -113.6) xPercent = 0;
      if (xPercent > 0) xPercent = -113.6;

      setX(xPercent);
      xPercent += speed * direction;
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div className="w-screen bg-[#B8E3E9] -translate-y-5 transform overflow-hidden h-55 flex items-center">
      <div ref={slider} className="flex w-max gap-32 items-center">
        {/* ITEM */}
        <div ref={first} className="flex items-center gap-25">
          <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
            FOOD TOUR
          </h1>
          <img
            src="/images/LuxuryDrink.avif"
            className="w-30 transform translate-y-1.5 h-auto scale-180"
            alt=""
          />

          <div className="transform -translate-x-30">
            <div className="flex items-center transform translate-x-32 gap-25">
              <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
                WALKING TOUR
              </h1>
              <img
                src="/images/MultiCookies.avif"
                className="w-30 transform translate-y-1.5 h-auto scale-180"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* DUPLICATE */}
        <div
          ref={second}
          className="flex items-center transform translate-x-55 gap-25"
        >
          <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
            FOOD TOUR
          </h1>
          <img
            src="/images/LuxuryDrink.avif"
            className="w-30 transform translate-y-1.5 h-auto scale-180"
            alt=""
          />

          <div className="transform -translate-x-30">
            <div className="flex items-center transform translate-x-32 gap-25">
              <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
                WALKING TOUR
              </h1>
              <img
                src="/images/MultiCookies.avif"
                className="w-30 transform translate-y-1.5 h-auto scale-180"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* DUPLICATE */}
        <div
          ref={third}
          className="flex items-center gap-25 transform translate-x-110"
        >
          <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
            FOOD TOUR
          </h1>
          <img
            src="/images/LuxuryDrink.avif"
            className="w-30 transform translate-y-1.5 h-auto scale-180"
            alt=""
          />

          <div className="transform -translate-x-30">
            <div className="flex items-center transform translate-x-32 gap-25">
              <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
                WALKING TOUR
              </h1>
              <img
                src="/images/MultiCookies.avif"
                className="w-30 transform translate-y-1.5 h-auto scale-180"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeScroll1;
