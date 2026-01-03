import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis;

export function initSmoothScroll() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.9,           
    smoothWheel: true,
    smoothTouch: true,
    wheelMultiplier: 1.3,       
    touchMultiplier: 1.7,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  let lastScroll = 0;

  lenis.on("scroll", ({ scroll, velocity }) => {
    const dir = scroll > lastScroll ? 1 : -1;
    lastScroll = scroll;

    lenis.options.duration = dir === 1 ? 1.9 : 1.6;

    lenis.options.wheelMultiplier =
      Math.abs(velocity) > 50 ? 1.45 : 1.3;

    ScrollTrigger.update();
  });

  // GSAP ticker sync
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.refresh();

  return lenis;
}

export function getLenis() {
  return lenis;
}
