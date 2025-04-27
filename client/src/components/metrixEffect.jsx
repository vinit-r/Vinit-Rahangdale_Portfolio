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
  margin: 0;
  background: #001f23;
  overflow: hidden;
  font-family: monospace;
`;

const Metrix = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #00ff41;
  display: flex;
  justify-content: space-around;
  z-index: -1;
`;

const Letter = styled.span`
  animation: ${rain} 1.5s linear infinite;
  font-size: 16px;
  opacity: 0;
  display: inline-block;
  white-space: nowrap;
  animation-delay: ${({ index }) => `${0.2 * index}s`};
`;


const letters = ["M", "E", "T", "R", "O", "N", "O", "M", "E"];
const MatrixEffect = () => {
  return (
    <Canvas>
      <Metrix>
      {letters.map((char, i) => (
          <Letter key={i} index={i + 1}>
            {char}
          </Letter>
        ))}
      </Metrix>
    </Canvas>
  );
};

export default MatrixEffect;
