import React, { useState } from "react";
import Experience from "../Experience";
import Education from "../Education";
Education;

const ToggleTabs = () => {
  const [selectedButton, setSelectedButton] = useState("EXPERIENCE");
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-between w-full h-[50rem] lg:h-screen text-white px-2 lg:px-28 py-5"
        id="education"
      >
        <div className="flex flex-col w-full lg:w-[35%]">
          {/* button  */}
          <div className="flex w-full items-center gap-x-2 lg:gap-x-0 justify-center lg:justify-between pb-3 sm:pb-5">
            <div
              onClick={() => setSelectedButton("EXPERIENCE")}
              className={`border-[1px] border-gray-600 ${
                selectedButton === "EXPERIENCE" ? "bg-slate-700 border-0" : ""
              } text-base sm:text-lg cursor-pointer font-MoonWalk px-5 py-2 rounded-md`}
            >
              Experience
            </div>
            <div
              onClick={() => setSelectedButton("EDUCATION")}
              className={`border-[1px] border-gray-600 ${
                selectedButton === "EDUCATION" ? "bg-slate-700 border-0" : ""
              } text-base sm:text-lg cursor-pointer font-MoonWalk px-5 py-2 rounded-md`}
            >
              Education
            </div>
          </div>
          {/* content  */}
          <div className="pt-3 sm:pt-5 pb-5 sm:pb-10 px-1 rounded-md">
            {selectedButton === "EXPERIENCE" ? (
              <div className="flex flex-col">
                <p className="text-xl sm:text-3xl pb-3 sm:pb-5 ">
                  Professional Experience
                </p>
                <span className="text-sm sm:text-base bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text">
                  Started my career with a Java internship, gaining solid
                  backend fundamentals. Transitioned into full-stack development
                  within fintech and health tech domains at a product-based
                  company, where I learned real-time implementation. Later at a
                  fast-paced service-based firm, I handled client-facing roles
                  and end-to-end project delivery. With 3+ years of experience,
                  I’m proficient across the stack and comfortable with agile
                  tools and team collaboration platforms.
                </span>
              </div>
            ) : (
              <div className="flex flex-col ">
                <p className="text-xl sm:text-3xl pb-3 sm:pb-5">
                  Professional Education
                </p>
                <span className="text-sm sm:text-base bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text">
                  Throughout my BCA and MCA studies, I explored various
                  technologies while immersing myself in academic challenges
                  beyond just coding—such as tackling complex system
                  architectures and problem-solving strategies. My passion for
                  Full Stack development emerged as I found satisfaction in
                  creating real-time, intuitive experiences, which now shapes my
                  diverse approach to technology and problem-solving in my
                  professional journey.
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-[65%] overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {selectedButton === "EXPERIENCE" ? <Experience /> : <Education />}
        </div>
      </div>
    </>
  );
};

export default ToggleTabs;
