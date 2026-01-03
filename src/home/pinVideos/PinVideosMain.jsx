import React from "react";
import PinVideo1 from "./PinVideo1";
import PinVideo2 from "./PinVideo2";
import PinVideo3 from "./PinVideo3";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PinVideosMain = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, i) => {
      gsap.to(card, {
        ease: "none",
        markers: true,
        scrollTrigger: {
          trigger: card,
          start: `top ${-(i * 8)}%`,
          endTrigger: ".container",
          end: "bottom bottom",
          scrub: true,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
          anticipatePin: 0,
          
        },
      });
    });
  });

  return (
    <div className="container relative -top-15 h-[254vh]">
      <div className="card relative">
        <PinVideo1 />
      </div>

      <div className="card relative">
        <PinVideo2 />
      </div>

      <div className="card relative">
        <PinVideo3 />
      </div>
    </div>
  );
};

export default PinVideosMain;

