import React from "react";
import Heading from "../Heading";
import { FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import SpotlightCard from "../Animation/spotlightCard";
import Resume from "../../assets/pdfFile/Resume.pdf";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="text-white py-5 px-2 lg:px-28">
          <Heading text={"About Me"} />
          <div className="flex flex-col md:flex-row py-1 gap-3 ">
            <div className="flex justify-center gap-x-3 bg-[#111111] p-2 sm:p-4 rounded-md shadow-2xl">
              <div className="flex flex-col gap-3">
                <div className="flex justify-center items-center flex-col border-[1px] h-32 sm:h-36 w-32 sm:w-36 rounded-md">
                  <FaLaptopCode className="text-3xl text-slate-400" />
                  <span className="text-xl sm:text-2xl text-slate-400 font-semibold">
                    Experience
                  </span>
                  <span className="text-base sm:text-lg text-slate-500">
                    3+ Years
                  </span>
                </div>
                <div className="flex justify-center items-center flex-col border-[1px] h-32 sm:h-36 w-32 sm:w-36 rounded-md">
                  <MdOutlineAutoGraph className="text-3xl" />
                  <span className="text-xl sm:text-2xl font-semibold">
                    Technology
                  </span>
                  <span className="text-base sm:text-lg">8+ Skills</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <div className="flex justify-center items-center flex-col border-[1px] h-32 sm:h-36 w-32 sm:w-36 rounded-md">
                  <FaProjectDiagram className="sm:text-3xl text-2xl" />
                  <span className="text-xl sm:text-2xl font-semibold">
                    Worked
                  </span>
                  <span className="text-base sm:text-lg">5+ Project</span>
                </div>
                <div className="flex justify-center items-center flex-col border-[1px] h-32 sm:h-36 w-32 sm:w-36 rounded-md">
                  <GrCertificate className="text-3xl text-slate-400" />
                  <span className="text-xl sm:text-2xl text-slate-400 font-semibold">
                    Certificates
                  </span>
                  <span className="text-base sm:text-lg text-slate-500">
                    4+ Course
                  </span>
                </div>
              </div>
            </div>

            {/* bg-[#0D0D0D] */}
            <SpotlightCard
              // className="custom-spotlight-card"
              spotlightColor="rgba(103, 105, 105, 0.79)"
            >
              <div className="flex flex-col justify-between">
                <div className="p-2 sm:p-4 text-sm sm:text-base lg:text-lg bg-gradient-to-r from-slate-600 via-white to-gray-500 text-transparent inline-block bg-clip-text">
                  Results-driven MERN Stack Developer with 3 years of experience
                  in building scalable web applications. Proficient in
                  JavaScript, React.js, Node.js, and MongoDB. Adept at
                  developing RESTful APIs, integrating third-party services,
                  optimizing application performance, and following best coding
                  practices. Strong knowledge of Agile methodologies, DevOps
                  practices, and microservices architecture. Experienced in
                  CI/CD pipelines, cloud deployment, unit testing, and
                  containerization using Docker and Kubernetes.
                </div>
                <div className=" pl-0 sm:pl-4 flex sm:justify-start justify-center mb-2">
                  <div className="flex gap-2 items-center w-fit px-3 bg-blue-500 sm:px-5 rounded-md cursor-pointer">
                    <a href={Resume} download="Vinit_Resume_MERN.pdf" className="text-base sm:text-lg py-2">
                      Download CV
                    </a>
                    <FaDownload className="text-base sm:text-xl " />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
          {/* <div className='text-3xl  font-semibold w-[60%] leading-tight bg-gradient-to-r from-blue-400 via-white to-gray-500 text-transparent inline-block bg-clip-text'>
          I am a Software Developer with 2+ years of experience specializing in
          full-stack development using the MERN stack. I have built scalable,
          responsive applications like claim portals, BNPL systems, and food
          delivery platforms, focusing on performance and user satisfaction.
          Proficient in React.js, Node.js, MongoDB, and Redux, I excel at
          integrating modern tools like Tailwind CSS and Material UI,
          implementing secure JWT authentication, and optimizing performance
          with microservice architectures. My adaptable and innovative approach
          ensures high-quality, scalable solutions for every project.
        </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
