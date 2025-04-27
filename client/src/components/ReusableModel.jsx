import React, { useState } from "react";

const ReusableModel = (props) => {
    const { children } = props;
  return (
    <div class="pointer-events-auto fixed inset-0 z-40 grid h-screen w-screen place-items-center  bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ">
      <div class="relative m-4 p-4 w-2/4 rounded-lg bg-[#111111] shadow-lg border border-gray-800">
        {children}
      </div>
    </div>
  );
};

export default ReusableModel;
