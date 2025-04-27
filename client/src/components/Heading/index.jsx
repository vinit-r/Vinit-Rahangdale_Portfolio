import React from "react";

const ScrollSlidingDot = ({ text }) => {

  return (
    <>
      <div className="flex w-full h-full pb-3">
        <span className="w-[1.5rem] h-[1.5rem] md:w-[2.2rem] md:h-[2.2rem] bg-blue-500 rounded-full mr-3" />
        <span className="text-white text-2xl sm:text-4xl font-MoonWalk">
          {text}
        </span>
      </div>
    </>
  );
};

export default ScrollSlidingDot;
