import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import axiosInstance from "../../api/interseptor";

const HeroBanner = () => {
  const [count, setCount] = useState(null);
  const textSections = [
    {
      text: "I   Am",
      size: "text-2xl sm:text-4xl lg:text-6xl",
      extraStyles: "font-extrabold",
    },
    {
      text: "Vinit  Rahangdale",
      size: "text-2xl sm:text-4xl lg:text-5xl",
      extraStyles: "font-extrabold pb-0 sm:pb-2 lg:pb-4",
    },
    {
      text: "MERN   Stack",
      size: "text-4xl sm:text-[3.5rem] lg:text-[4.5rem]",
      extraStyles: "font-bold text-blue-500 pb-0 sm:pb-4 lg:pb-8",
    },
    {
      text: "DEVELOPER",
      size: "text-4xl sm:text-[4rem] lg:text-[5rem]",
      extraStyles: "font-extrabold",
    },
  ];

  // Replace the existing useEffect with this:
  useEffect(() => {
    const controller = new AbortController();

    const fetchCount = async () => {
      try {
        const visitorCount = await axiosInstance.get("count/visitors", {
          signal: controller.signal,
        });
        setCount(visitorCount.data.count);
      } catch (error) {
        if (error.name === "CanceledError") {
          return;
        }
        console.log(error);
      }
    };

    fetchCount();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="w-full h-full flex">
      {/* Hero Banner Background */}
      <div className="flex flex-row md:bg-none bg-[url('/public/image/vinit_edit.jpg')] bg-cover bg-no-repeat bg-center w-full h-full">
        {/* Left Section */}
        <div className="md:bg-transparent bg-blackCover relative md:w-[60%] w-full h-full flex flex-col justify-center items-center py-20">
          {/* Text Content */}
          <div className="text-white flex flex-col font-MoonWalk text-center">
            {textSections.map((section, index) => (
              <TextAnimation
                key={index}
                text={section.text}
                size={section.size}
                extraStyles={section.extraStyles}
              />
            ))}
          </div>

          {/* Stats Section */}
          {/* <div className="text-white flex pt-10 w-full justify-center gap-2 sm:gap-5 text-center font-Courgette">
            <div className="text-white text-2xl">
              {count === null ? (
                <span className="opacity-0">0</span>
              ) : (
                <span className="flex">
                  <FaEye /> Visitors : {count}
                </span>
              )}
            </div>
          </div> */}
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-[40%] w-0 md:h-full h-0">
          <img
            className="h-full w-full object-cover bg-transparent opacity-50"
            src="/public/image/vinit_edit.jpg"
            alt="Vinit Rahangdale"
          />
        </div>
      </div>
    </div>
  );
};

/* Text Animation Component */
const TextAnimation = ({ text, size, extraStyles }) => {
  return (
    <div className="flex space-x-[0.5px] sm:space-x-1 justify-center items-center">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`${size} inline-block animate-slideUp ${extraStyles}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default HeroBanner;
