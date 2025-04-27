import React from "react";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid text-sm sm:text-base">
        <div className="flex md:contents flex-row-reverse">
          <div className="relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-lg font-semibold lg:text-xl ">
              Software Developer
            </h3>
            <div className="flex flex-col">
              <p className="mt-2 font-semibold">
                <span>Company - </span>
                <span>The Rapid Hire Pvt. Ltd.</span>
              </p>
              <p className="font-semibold">
                <span>Duration - </span>
                <span>07/2024 To Present</span>
              </p>
              <p className="mt-2 bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text">
                Delivered scalable MERN/Next.js solutions in fast-paced startup
                environments, led client discussions, built end-to-end APIs with
                REST/GraphQL, and streamlined deployments with Docker, GitHub
                Actions, and TDD practices.
              </p>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
        </div>

        <div className="flex md:contents ">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-lg font-semibold lg:text-xl ">
              Product Developer
            </h3>
            <div className="flex flex-col">
              <p className="mt-2 font-semibold">
                <span>Company - </span>
                <span>EMIXCHANGE Pvt. Ltd.</span>
              </p>
              <p className="font-semibold">
                <span>Duration - </span>
                <span>01/2023 To 07/2024</span>
              </p>
              <p className="mt-2 bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text">
                Built and scaled full-stack apps (React, Node.js, MongoDB),
                boosted system speed by 20%, improved APIs by 15%, and delivered
                cloud deployments on AWS in fast-paced Agile teams.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
          <div className="relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-lg font-semibold lg:text-xl ">
              Trainee Developer
            </h3>
            <div className="flex flex-col">
              <p className="mt-2 font-semibold">
                <span>Institute - </span>
                <span> A2 Infotech Pvt. Ltd.</span>
              </p>
              <p className="font-semibold">
                <span>Duration - </span>
                <span>09/2022 To 12/2022</span>
              </p>
              <p className="mt-2 bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text">
                Master Core Java (JSE) with in-depth instruction on
                object-oriented programming, Java APIs, and hands-on coding
                skillsfor real-world development.
              </p>
            </div>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
        </div>

        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-indigo-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative py-4 px-2 my-6 text-white bg-[#111111] rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-lg font-semibold lg:text-xl ">
              Prompt Engineering
            </h3>
            <div className="flex flex-col">
              <p className="mt-2 font-semibold">
                <span>Source - </span>
                <span>Andrew Ng (DeepLearning)</span>
              </p>
              <p className="font-semibold">
                <span>Time - </span>
                <span>2023</span>
              </p>
              <p className="mt-2 bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text">
                Acquired proficiency in prompt engineering through ChatGPT
                course, learning effective prompt creation, OpenAI API
                utilization, and practical applications in text tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
