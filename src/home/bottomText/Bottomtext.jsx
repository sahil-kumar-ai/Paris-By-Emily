import React from "react";

const Bottomtext = () => {
  return (
    <div className=" font-medium flex justify-center font-[regular] tracking-[1px] text-[65px] h-[85vh] w-screen relative top-80">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center gap-4">
          <h1 className="">From </h1>
          <img
            className="h-23"
            src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf078027f56988ffb3fb9_sticker-croissant-making-workshop.avif"
            alt=""
          />
          <h1 className="bg-[#B8E3E9] w-101 h-19 flex flex-col justify-center text-center">croissant-making</h1>
          <h1>workshop to</h1>
        </div>


        <div className="flex justify-center gap-4">
          <img className="h-23"
            src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf078469f2fbc4a10e990_sticker-champagne-seine-cruise.avif"
            alt=""
          />

          <h1 className="bg-[#D3D3FF] w-151 h-20 flex flex-col justify-center text-center transform rotate-[-0.5deg]">champagne Seine cruises,</h1>

          <img className="h-23"
            src="https://cdn.prod.website-files.com/684fc56fc7e02f3dad4a6138/68ccf07824442bd8b0d70869_sticker-montmartre-tour.avif"
            alt=""
          />
          <h1>discover</h1>
        </div>


        <div className="flex justify-center gap-4">
          <h1 className="bg-[#FF7782] w-80 h-22 flex flex-col justify-center text-center">secret streets</h1>

          <h1>and Paris moments à la Emily</h1>
        </div>
      </div>
    </div>
  );
};

export default Bottomtext;
