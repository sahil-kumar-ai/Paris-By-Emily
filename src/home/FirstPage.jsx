import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Navbar from "./Navigation/Navbar";
import FrontPage from "./front-Page/FrontPage";
import FrontPageFooter from "./FrontPageFooter/FrontPageFooter";

const FirstPage = () => {
  const loaderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
  document.body.style.overflow = "hidden";

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.fromTo(
    loaderRef.current.querySelectorAll(".textSpan"),
    { y: 110, },
    { y: 0, opacity: 1, duration: 1.2, stagger: 0.04 }
  )
    .fromTo(
      loaderRef.current.querySelectorAll(".textSpanSmall"),
      { opacity: 0 },
      { opacity: 1, duration: 1.2, stagger: 0.018 },
      "<"
    );

  tl.to(
    videoRef.current,
    {
      scale: 0.5,
      borderRadius: '20px',
      opacity: 1,
      filter: "blur(15px)",
      duration: 1.2,
      delay: -1,
      ease: "power3.out",
    },
    ">1"
  );

  tl.to(
    videoRef.current,
    {
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
      duration: 2,
      delay: -0.2,
      borderRadius: "20px",
      ease: "power3.inOut",
    },
    ">0.2" 
  );

  tl.to(
    loaderRef.current.querySelectorAll(".textSpan"),
    { y: -110, duration: 1, stagger: 0.04 },
    "-=1.8"
  )
    .to(
      loaderRef.current.querySelectorAll(".textSpanSmall"),
      { opacity: 0, duration: 1, delay: -0.2, stagger: 0.018, ease: "power3.out" },
      "-=1.8"
    );

  const timer = setTimeout(() => {
    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        loaderRef.current.style.display = "none";
        document.body.style.overflow = "auto";
        videoRef.current?.pause();
      },
    });
  }, 4800);

  return () => {
    clearTimeout(timer);
    tl.kill();
    document.body.style.overflow = "auto";
  };
}, []);


  return (
    <>
      <div className="relative top-2.75 left-3">
        <FrontPage />
        <div className="absolute bottom-2">
          <FrontPageFooter />
        </div>
      </div>

      <div
        ref={loaderRef}
        className="fixed inset-0 z-9999 bg-black flex items-center justify-center"
      >
        <div ref={videoRef} className='absolute opacity-0 h-[95.5vh] w-[97.5vw] rounded-3xl overflow-hidden light top-2.75 left-3'>
      <video className='h-full w-full object-cover' loop muted autoPlay src='./Media/FirstPagevid.mp4' />
    </div>

        <div className="absolute flex flex-col items-center">
          <div className=" overflow-hidden h-26.25 -translate-y-1">
            <h1 className="flex font-[regular] text-white text-8xl font-medium">
            {"Paris-By-Emily".split("").map((l, i) => (
              <span key={i} className="textSpan inline-block">
                {l}
              </span>
            ))}
          </h1>
          </div>

          <h2 className="flex font-[regular2] transform -translate-y-5 text-white text-xl tracking-[2px] mt-4">
            {"The-Official-Brand-Of-Netflixs-Emily-In-Paris"
              .split("")
              .map((l, i) => (
                <span key={i} className="textSpanSmall inline-block">
                  {l}
                </span>
              ))}
          </h2>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
