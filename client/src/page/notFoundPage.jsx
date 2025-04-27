// NotFound.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

const rain = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

const Canvas = styled.div`
  position: relative;
  height: 100vh;
  background-color: #0c0c0d; /* Dark background */
  color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
`;

const Metrix = styled.div`
//   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
//   justify-content: center;
  align-content: center;
  opacity: 0.05;
  font-size: 20vw;
  z-index: 0;
`;

const Letter = styled.span`
 margin: 0 1vw;
  line-height: 1;
  font-weight: bold;
  color: #ffffff;
`;
const NotFoundPage = () => {
    const numbers = ['0', '4'];

  return (
    <>
      {/* <div className="w-screen h-screen flex text-white bg-[#282424]">
        <div className=" w-full flex flex-col text-[7rem] font-semibold justify-center items-center px-[10rem]">
          <p className="flex w-full">
            <span>/not</span>
          </p>
          <p className="flex justify-center w-full">
            <span>404</span>
          </p>
          <p className="flex justify-end w-full">
            <span>found</span>
          </p>
        </div>
      </div> */}

      <Canvas>
        <Metrix>
          {/* Repeating 404s as background */}
          {Array.from({ length: 30 }).map((_, index) => (
            <Letter key={index} className="bg-text">
              {numbers[index % numbers.length]}
            </Letter>
          ))}
        </Metrix>
      </Canvas>
    </>
  );
};

export default NotFoundPage;
