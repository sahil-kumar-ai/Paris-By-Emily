import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ThreeScroll3 = () => {
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
      if (xPercent <= -116.7) xPercent = 0;
      if (xPercent > 0) xPercent = -116.7;

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
    <div className="w-screen bg-[#FF7782] -translate-y-5 transform overflow-hidden h-55 flex items-center">
      <div ref={slider} className="flex w-max gap-32 items-center">
        {/* ITEM */}
        <div ref={first} className="flex items-center gap-25">
          <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
            MACARON
          </h1>
          <img
            src="/images/Cookies.avif"
            className="w-30 transform translate-y-1.5 h-auto scale-180"
            alt=""
          />

          <div className="transform -translate-x-30">
            <div className="flex items-center transform translate-x-32 gap-25">
              <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
                CROISSANT
              </h1>
              <img
                src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf078027f56988ffb3fb9_sticker-croissant-making-workshop.avif"
                className="w-30 transform translate-y-1.5 h-auto scale-180"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* DUPLICATE 1 */}
        <div
          ref={second}
          className="flex items-center gap-25 transform translate-x-55"
        >
          <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
            MACARON
          </h1>
          <img
            src="/images/Cookies.avif"
            className="w-30 transform translate-y-1.5 h-auto scale-180"
            alt=""
          />

          <div className="transform -translate-x-30">
            <div className="flex items-center transform translate-x-32 gap-25">
              <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
                CROISSANT
              </h1>
              <img
                src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf078027f56988ffb3fb9_sticker-croissant-making-workshop.avif"
                className="w-30 transform translate-y-1.5 h-auto scale-180"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* DUPLICATE 2 */}
        <div
          ref={third}
          className="flex items-center gap-25 transform translate-x-110"
        >
          <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
            MACARON
          </h1>
          <img
            src="/images/Cookies.avif"
            className="w-30 transform translate-y-1.5 h-auto scale-180"
            alt=""
          />

          <div className="transform -translate-x-30">
            <div className="flex items-center transform translate-x-32 gap-25">
              <h1 className="font-[BOLD] text-[205px] whitespace-nowrap">
                CROISSANT
              </h1>
              <img
                src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf078027f56988ffb3fb9_sticker-croissant-making-workshop.avif"
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

export default ThreeScroll3;
