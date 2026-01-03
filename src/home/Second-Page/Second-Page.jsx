import React, { useEffect, useRef } from "react";
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { gsap } from "gsap";

const SecondPage = () => {
  const ViewExp = useRef();
  const ViewExpArrowCircle = useRef();
  const ViewExpArrow = useRef();
  const ViewExpArrowCircleBehind = useRef();
  const ViewExpArrowBehind = useRef();
  const viewExpAll = useRef();

  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const poolIndexRef = useRef(0);
  const poolSize = 15;
  const lastTimeRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });

  const imageUrls = [
    "/images/1.avif",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
    "/images/13.png",
    "/images/14.png",
    "/images/15.png",
    "/images/16.png",
    "/images/17.png",
    "/images/18.png",
    "/images/19.png",
  ];


  useEffect(() => {
    const viewExp = viewExpAll.current;

    const handleMouseEnter = () => {
      gsap.to(ViewExpArrow.current, { rotate: 40, duration: 0.8, ease: "power3.inOut" });
      gsap.to(ViewExpArrowCircle.current, { scale: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExp, { x: 65, duration: 0.8, ease: "power3.inOut" });
      gsap.to(ViewExpArrowBehind.current, { rotate: 40, duration: 0.8, ease: "power3.inOut" });
      gsap.to(ViewExpArrowCircleBehind.current, { scale: 1, duration: 0.8, ease: "power3.inOut" });
    };

    const handleMouseLeave = () => {
      gsap.to(ViewExpArrow.current, { rotate: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(ViewExpArrowCircle.current, { scale: 1, duration: 0.8, ease: "power3.inOut" });
      gsap.to(viewExp, { x: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(ViewExpArrowBehind.current, { rotate: 0, duration: 0.8, ease: "power3.inOut" });
      gsap.to(ViewExpArrowCircleBehind.current, { scale: 0, duration: 0.8, ease: "power3.inOut" });
    };

    viewExp.addEventListener("mouseenter", handleMouseEnter);
    viewExp.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      viewExp.removeEventListener("mouseenter", handleMouseEnter);
      viewExp.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < poolSize; i++) {
      const img = document.createElement("img");

      img.style.position = "absolute";
      img.style.width = "316px";         
      img.style.height = "460px";        
      img.style.borderRadius = "40px";
      img.style.overflow = "hidden";
      img.style.objectFit = "cover";
      img.style.pointerEvents = "none";
      img.style.left = "0";
      img.style.top = "0";
      img.style.transform = "translate(-50%, -50%) scale(0)";
      img.style.opacity = "0";
      img.style.zIndex = "0";

      container.appendChild(img);
      imagesRef.current.push(img);
    }
  }, []);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTimeRef.current < 120) return;
      lastTimeRef.current = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 5) return;

      lastPosRef.current = { x, y };

      const imgToShow = imagesRef.current[poolIndexRef.current];
      poolIndexRef.current = (poolIndexRef.current + 1) % poolSize;

      imgToShow.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];

      gsap.killTweensOf(imgToShow);

      gsap.set(imgToShow, {
        x,
        y,
        rotate: gsap.utils.random(-15, 15),
        scale: 0,
        opacity: 0,
      });

      gsap.to(imgToShow, {
        scale: 1,        
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(imgToShow, {
            scale: 0.8,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          });
        },
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-[98vh] w-[97.5vw] top-7 left-2.5 flex flex-col justify-center items-center gap-8 relative">
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></div>

      <div className="bg-[#D3D3FF] z-1 uppercase h-10 font-[Regular2] text-4xl w-60 flex flex-col justify-center text-center items-center">
        <h1 className="top-1 relative">Explore At Your Own Pace</h1>
      </div>

      <div className="z-1 font-[regular] text-8xl flex flex-col justify-center items-center text-center leading-21">
        Unlock The <br /> Emily in Paris <br /> Experiences
      </div>

      <div>
        <div ref={viewExpAll} className="flex flex-row relative right-4 z-1">
          <div ref={ViewExpArrowCircleBehind} className="flex flex-col justify-center origin-right scale-0">
            <i ref={ViewExpArrowBehind} className="bg-[#D3D3FF] h-15 w-15 rounded-full flex justify-center items-center">
              <RiArrowRightUpLongLine className="w-7 h-7" />
            </i>
          </div>

          <div ref={ViewExp} className="bg-white h-17 w-54 rounded-full flex flex-col justify-center">
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
  );
};

export default SecondPage;
