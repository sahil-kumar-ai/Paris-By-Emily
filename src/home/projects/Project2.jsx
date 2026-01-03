import React, { useEffect, useRef } from 'react';
import { RiArrowRightUpLongLine } from "@remixicon/react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Project2 = () => {

    const main = useRef();
    const mainSec = useRef();
    const hoverImg = useRef();
    const img = useRef();

    const longText = useRef();
    const chunks = useRef();
    const arrow = useRef();
    const circleArrow = useRef();

    useGSAP(() => {

        const xTo = gsap.quickTo(hoverImg.current, "x", {
            duration: 0.4,
            ease: "power3.out"
        });

        const yTo = gsap.quickTo(hoverImg.current, "y", {
            duration: 0.4,
            ease: "power3.out"
        });

        const onMouseMove = (e) => {
            xTo(e.clientX - 120);
            yTo(e.clientY - 170);
        };

        main.current.addEventListener("mouseenter", () => {

            gsap.to(mainSec.current, {
                backgroundColor: '#D3D3FF',
                duration: 0.7,
                ease: "power3.out",
            })

            gsap.to(longText.current, {
                x: 110,
                duration: 0.7,
                ease: "power3.out",
                scale: 0.98,
            });

            gsap.to(arrow.current, {
                rotate: 45,
                ease: "power3.out",
                duration: 0.8,
            });

            gsap.to(circleArrow.current, {
                x: -75,
                scale: 0.98,
                ease: "power3.out",
                duration: 0.8,
            });

            gsap.killTweensOf(img.current);


            gsap.to(img.current, {
                scale: 1,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.1,
            });

            gsap.killTweensOf(hoverImg.current, {
    opacity: true,
    scale: true
});

             gsap.to(hoverImg.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power3.out"
            });

            window.addEventListener("mousemove", onMouseMove);

        });

        main.current.addEventListener("mouseleave", () => {

            gsap.to(mainSec.current, {
                backgroundColor: 'transparent',
                duration: 0.7,
                ease: "power3.out",
            })

            gsap.to(longText.current, {
                x: 0,
                duration: 0.7,
                ease: "power3.out",
                scale: 1,
            });

            gsap.to(arrow.current, {
                rotate: 0,
                ease: "power3.out",
                duration: 0.8,
            });

            gsap.to(circleArrow.current, {
                x: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
            });

            gsap.killTweensOf(img.current);


            gsap.to(img.current, {
                scale: 0,
                duration: 0.4,
                ease: "power3.out",
                delay: 0,
            });

            gsap.killTweensOf(hoverImg.current, {
    opacity: true,
    scale: true
});

            gsap.to(hoverImg.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: "power3.out"
            });

            window.removeEventListener("mousemove", onMouseMove);

        });
    })

    





  return (
    <div>

        <div
                ref={hoverImg}
                className='pointer-events-none fixed top-0 left-0 z-50 h-115 w-79 rounded-[40px] overflow-hidden'
                style={{ opacity: 0, transform: "scale(0.95)" }}
            >
                <img
                    className='scale-[2.2] object-cover w-full h-full'
                    src="https://cdn.prod.website-files.com/685193d6882b191cbbc36414/688b330b2f7884d4b4f1b80d_Croissant%20making%20end%20products%20with%20red%20croissants.avif"
                    alt=""
                />
            </div>


        <div ref={main} className='h-48 relative flex justify-center flex-col'>
        <div ref={mainSec} className='flex justify-between w-[93vw] h-49 transform translate-x-13.5'>


            <div className='flex transform translate-y-5.5'>
                <div ref={img} className='h-26 w-26 scale-[0] transform origin-left translate-y-6 flex absolute flex-col justify-center'>
                    <img src="./public/images/Crossiant.png" alt="" />
                </div>
                <div ref={longText}>
            <div>
                <h1 className='font-[regular] text[#1A1A1A] text-[58px] '>
                    Croissant-Making Workshop
                </h1>
            </div>
            <div ref={chunks} className='flex text-[#1A1A1A]'>
                <div className='border w-45 flex flex-col justify-center rounded-full h-12'>
                    <h1 className='font-[REGULAR2] relative top-0.5 text-center text-[37px] tracking-[0.5px] '>WORKSHOPS</h1>
                </div>
                <div className='border w-34 flex flex-col justify-center rounded-full h-12'>
                    <h1 className='font-[REGULAR2] relative top-0.5 text-center text-[37px] tracking-[0.5px] '>2.5HOURS</h1>
                </div>
                <div className='border w-35 flex flex-col justify-center rounded-full h-12'>
                    <h1 className='font-[REGULAR2] relative top-0.5 text-center text-[37px] tracking-[0.5px] '>FROM131€</h1>
                </div>
            </div>
            </div>
            
        </div>

        <div className='flex flex-col justify-center'>
            <div ref={circleArrow} className='rounded-full h-17 w-17 border flex justify-center items-center'>
            <i ref={arrow}><RiArrowRightUpLongLine className='w-8 h-8' /></i>
        </div>
        </div>
        </div>
    </div>


    </div>
  )
}

export default Project2