// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const FirstLoader = ({ onFinish }) => {
//   const introRef = useRef();

//   useEffect(() => {
//   document.body.style.overflow = "hidden";

//   const video = document.querySelector(".image"); // ✅ ADDED (ONLY FIX)

//   const tl = gsap.timeline({
//     defaults: { ease: "power4.out" },
//     onComplete: () => {
//       document.body.style.overflow = "auto";
//       if (onFinish) onFinish();
//     },
//   });

//   tl.fromTo(
//     ".textSpan",
//     { y: 100, opacity: 0 },
//     {
//       y: 0,
//       opacity: 1,
//       duration: 1.2,
//       stagger: 0.04,
//     },
//     0.5
//   )
//     .fromTo(
//       ".textSpanSmall",
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 1.4,
//         stagger: 0.018,
//       },
//       0.5
//     )
//     .to(".textSpan", {
//       opacity: 0,
//       y: -50,
//       duration: 1,
//       stagger: 0.04,
//       delay: 1.2,
//     })
//     .to(
//       ".textSpanSmall",
//       {
//         opacity: 0,
//         delay: 1.5,
//         filter: "blur(12px)",
//         duration: 1,
//         stagger: 0.015,
//       },
//       2.8
//     );

//   tl.to(
//     ".image",
//     {
//       scale: 0.5,
//       opacity: 1,
//       filter: "blur(15px)",
//       delay: -0,
//       duration: 1.2,
//       ease: "power3.out",
//     },
//     3
//   );

//   tl.to(".image", {
//     filter: "blur(3px)",
//     scale: 0.97,
//     opacity: 1,
//     duration: 2,
//     borderRadius: "5px",
//     ease: "power3.inOut",
//     delay: -3,
//   });


//   tl.to(introRef.current, {
//     duration: 2,
//     backgroundColor: "#F1E1CF",
//     borderRadius: "0px",
//     ease: "power3.inOut",
//     delay: -2,
//   });


//   const timeout = setTimeout(() => {
//     gsap.to(introRef.current, {
//   opacity: 1,
//   duration: 0.7,
//   ease: "power2.out",
//   backgroundColor: "#000000",
//   onComplete: () => {
//     tl.kill();
//     video?.pause();
//     document.body.style.overflow = "auto";
//     onFinish?.();
//   },
// });
// gsap.to(".image", {
//   opacity: 0,
//   duration: 0.5,
//   ease: "power2.out",
//   backgroundColor: "#000000",
// });

//   }, 6100);

//   return () => {
//     clearTimeout(timeout);
//     tl.kill();
//     video?.pause();
//     document.body.style.overflow = "auto";
//   };
// }, []);


//   return (
//     <div>
//       <div
//         ref={introRef}
//         className="fixed backdrop-blur-lg inset-0 opacity-100 z-[9999] bg-black flex flex-col items-center justify-center"
//       >
//         <video
//           src="./Media/FirstPagevid.mp4"
//           loop
//           muted
//           autoPlay
//           playsInline
//           className="z-[99] object-cover scale-[1] bg-black opacity-0 image rounded-[70px] fixed h-screen w-screen"
//           alt=""
//         />

//         <div className="h-[71px] w-[400px] z-[9999]  transform scale-[1.1] overflow-hidden flex items-center justify-center">
//           <h1 className="flex text-white z-[999] font-[REGULAR] font-medium text-6xl tracking-wide">
//             {[
//               "P",
//               "a",
//               "r",
//               "i",
//               "s",
//               "-",
//               "B",
//               "y",
//               "-",
//               "E",
//               "m",
//               "i",
//               "l",
//               "y",
//             ].map((letter, i) => (
//               <span key={i} className="textSpan inline-block">
//                 {letter}
//               </span>
//             ))}
//           </h1>
//         </div>

//         <div className="h-[60px] transform z-[999] -translate-y-2 w-[350px] transform scale-[1.1] flex items-center justify-center">
//           <h1 className="flex text-white font-[Regular2] font-medium text-lg tracking-[2px]">
//             {[
//               "T",
//               "h",
//               "e",
//               "-",
//               "O",
//               "f",
//               "f",
//               "i",
//               "c",
//               "i",
//               "a",
//               "l",
//               "-",
//               "B",
//               "r",
//               "a",
//               "n",
//               "d",
//               "-",
//               "O",
//               "f",
//               "-",
//               "N",
//               "e",
//               "t",
//               "f",
//               "l",
//               "i",
//               "x",
//               "’",
//               "s",
//               "-",
//               "E",
//               "m",
//               "i",
//               "l",
//               "y",
//               "-",
//               "I",
//               "n",
//               "-",
//               "P",
//               "a",
//               "r",
//               "i",
//               "s",
//             ].map((letter, i) => (
//               <span key={i} className="textSpanSmall inline-block">
//                 {letter}
//               </span>
//             ))}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstLoader;
