import React, { useRef } from "react";
import DragMetext from "./DragMetext";
import DragMeImage1 from "./DragMeImage1";
import DragMeImage2 from "./DragMeImage2";
import DragMeImage3 from "./DragMeImage3";
import DragMeImage4 from "./DragMeImage4";
import DragMeImage5 from "./DragMeImage5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import _ScrollTrigger  from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";
import { InertiaPlugin } from "gsap/all";


gsap.registerPlugin(_ScrollTrigger, Draggable, InertiaPlugin);

const DragMe = () => {
  const main = useRef();

  const dragMe1 = useRef();
  const dragMe2 = useRef();
  const dragMe3 = useRef();
  const dragMe4 = useRef();
  const dragMe5 = useRef();

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: main.current, start: "top 40%", toggleActions: "play none none none" }
  });

  tl.to(dragMe1.current, { scale: 1, duration: 0.4, ease: "power3.out", rotate: -4 })
    .to(dragMe2.current, { scale: 1, duration: 0.4, ease: "power3.out", rotate: 4 }, "-=0.2")
    .to(dragMe3.current, { scale: 1, duration: 0.4, ease: "power3.out", rotate: -3 }, "-=0.2")
    .to(dragMe4.current, { scale: 1, duration: 0.4, ease: "power3.out", rotate: 3 }, "-=0.2")
    .to(dragMe5.current, { scale: 1, duration: 0.4, ease: "power3.out", rotate: -5 }, "-=0.2");

  Draggable.create(
    [dragMe1.current, dragMe2.current, dragMe3.current, dragMe4.current, dragMe5.current],
    {
      type: "x,y",
      bounds: main.current,
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
      onPress() { gsap.to(this.target, { scale: 1.05, duration: 0.15 }); },
      onRelease() { gsap.to(this.target, { scale: 1, duration: 0.15 }); },
      onDrag() { gsap.to(this.target, { rotate: this.x / 40, duration: 0.1 }); },
      onDoubleClick() { gsap.to(this.target, { x: 0, y: 0, rotate: 0, duration: 0.4, ease: "power3.out" }); },
    }
  );
}, []);



  return (
    <div
      ref={main}
      className="h-[122.5vh] w-screen relative top-75"
    >
      <div className="absolute w-full h-full">
        <div>
          <DragMetext />
        </div>
      </div>

      <div
        ref={dragMe1}
        className="absolute scale-[0] left-[40%] top-[29%] flex justify-center items-center"
      >
        <DragMeImage1 />
      </div>

      <div
        ref={dragMe2}
        className="absolute scale-[0] left-[40%] top-[29%] flex justify-center items-center"
      >
        <DragMeImage2 />
      </div>

      <div
        ref={dragMe3}
        className="absolute scale-[0] left-[40%] top-[29%] flex justify-center items-center"
      >
        <DragMeImage3 />
      </div>

      <div
        ref={dragMe4}
        className="absolute scale-[0] left-[40%] top-[29%] flex justify-center items-center"
      >
        <DragMeImage4 />
      </div>

      <div
        ref={dragMe5}
        className="absolute scale-[0] left-[40%] top-[29%] flex justify-center items-center"
      >
        <DragMeImage5 />
      </div>
    </div>
  );
};

export default DragMe;
