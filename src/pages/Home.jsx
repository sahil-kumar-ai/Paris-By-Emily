import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstPage from "../home/FirstPage";
import Navbar from "../home/Navigation/Navbar";
import SecondPage from "../home/Second-Page/Second-Page";
import Thirdpage from "../home/thirdPage/Thirdpage";
import FisrtTextScroll from "../home/firstTextScroll/FisrtTextScroll";
import PinVideosMain from "../home/pinVideos/PinVideosMain";
import ThreeScroll from "../home/threeScroll/ThreeScroll";
import Project from "../home/projects/Project";
import SideSlice from "../home/sideSlide/SideSlice";
import DragMe from "../home/dragMe/DragMe";
import Bottomtext from "../home/bottomText/Bottomtext";
import Footer from "../home/footer/footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  return (
    <div className="bg-[#F5F1EB] relative w-screen">
        <div className="bg-[#F1E1CF] z-2 h-[1450vh] w-screen overflow-x-hidden">
          <FirstPage />
          <Navbar />
          <SecondPage />
          <Thirdpage />
          <FisrtTextScroll />
          <PinVideosMain />
          <ThreeScroll />
          <Project />
          <SideSlice />
          <DragMe />
          <Bottomtext />
        </div>
        <div className="relative">
          <Footer />
        </div>
    </div>
  );
};

export default Home;
