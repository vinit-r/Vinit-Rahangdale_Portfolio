import React from "react";
import { motion } from "framer-motion";

import Heading from "../Heading";
import { IoLogoReact, IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import { TbBrandJavascript, TbBrandRedux, TbBrandTypescript, TbBrandCypress } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaAws, FaDocker } from "react-icons/fa";
import { MdSettingsApplications } from "react-icons/md";
import {
  SiMui,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJest, 
  SiGraphql
} from "react-icons/si";
import { FaBootstrap, FaNodeJs, FaJava, FaGithubSquare } from "react-icons/fa";

const fontEndTech = [
  {
    tech: "Javascript",
    icon: (
      <TbBrandJavascript className="text-base sm:text-3xl text-yellow-500 mt-1" />
    ),
  },
  {
    tech: "Typescript",
    icon: (
      <TbBrandTypescript className="text-base sm:text-3xl text-blue-500 mt-1" />
    ),
  },
  {
    tech: "Java",
    icon: <FaJava className="text-base sm:text-3xl text-white" />,
  },
  {
    tech: "React.js",
    icon: <IoLogoReact className="text-base sm:text-3xl mt-1 text-blue-500" />,
  },
  {
    tech: "Node.js",
    icon: <FaNodeJs className="text-base sm:text-3xl text-green-500 mt-1" />,
  },
  {
    tech: "Express.js",
    icon: <SiExpress className="text-base sm:text-3xl text-green-500 mt-1" />,
  },
  {
    tech: "Next.js",
    icon: (
      <RiNextjsFill className="text-base sm:text-3xl text-blue-500 mt-1" />
    ),
  },
  {
    tech: "Redux",
    icon: <TbBrandRedux className="text-base sm:text-3xl mt-1 text-blue-500" />,
  },
  {
    tech: "HTML",
    icon: <TiHtml5 className="text-base sm:text-3xl mt-1 text-orange-600" />,
  },
  {
    tech: "CSS",
    icon: <IoLogoCss3 className="text-base sm:text-3xl mt-1 text-blue-500" />,
  },
  {
    tech: "Bootstrap",
    icon: (
      <FaBootstrap className="text-base sm:text-3xl mt-1 text-violet-500" />
    ),
  },
  {
    tech: "Material UI",
    icon: <SiMui className="text-base sm:text-3xl mt-1 text-blue-800" />,
  },
  {
    tech: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="text-base sm:text-3xl mt-1 text-blue-600" />
    ),
  },
];
const backEndTech = [
  {
    tech: "AWS(EC2, S3, Lambda)",
    icon: <FaAws className="text-base sm:text-3xl text-yellow-200 mt-1" />,
  },
  {
    tech: "Docker",
    icon: <FaDocker className="text-base sm:text-3xl text-blue-600" />,
  },
  {
    tech: "Version Control",
    icon: <FaGitAlt className="text-base sm:text-3xl mt-1" />,
  },
];
const dbAndTools = [
  {
    tech: "MongoDB",
    icon: <SiMongodb className="text-base sm:text-3xl text-green-500 mt-1" />,
  },
  {
    tech: "MySQL",
    icon: <SiMysql className="text-base sm:text-3xl text-orange-400" />,
  },
  {
    tech: "Firebase",
    icon: <IoLogoFirebase className="text-base sm:text-3xl mt-1" />,
  },
  {
    tech: "PoastgreSQL",
    icon: (
      <BiLogoPostgresql className="text-base sm:text-3xl text-blue-500 mt-1" />
    ),
  },
];
const projectManagement = [
  {
    tech: " RESTful APIs",
    icon: <MdSettingsApplications className="text-base sm:text-3xl text-white mt-1" />,
  },
  {
    tech: " GraphQL",
    icon: <SiGraphql className="text-base sm:text-3xl text-pink-600" />,
  },
  {
    tech: "Jest",
    icon: (
      <SiJest  className="text-base sm:text-3xl text-[#943c5c] mt-1" />
    ),
  },
  {
    tech: "Cypress",
    icon: (
      <TbBrandCypress  className="text-base sm:text-3xl text-green-600 mt-1" />
    ),
  },
];

const Technologies = () => {
  return (
    <>
      <div className="w-full h-full text-white py-5 px-2 lg:px-28" id="skills">
        <Heading text={"Technologies"} />
        <div className="flex flex-col py-0 sm:py-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // className="p-10 bg-green-500 text-white text-center text-xl rounded-lg"
          >
            <span className="text-xl sm:text-3xl block pb-3 lg:pb-5">
            Language & Frameworks
            </span>
            <div className="flex flex-1 flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 sm:gap-y-6">
              {fontEndTech?.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className=" border-[1px] rounded-md border-blue-400 hover:border-green-500 justify-center items-center "
                  >
                    <div className="flex py-2 lg:py-4 px-2 sm:px-8 gap-2 sm:gap-3">
                      <span className="text-base md:text-xl lg:text-2xl font-extralight">
                        {tech?.tech}
                      </span>
                      <span className="text-white">{tech?.icon}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // className="p-10 bg-green-500 text-white text-center text-xl rounded-lg"
          >
            <span className="text-xl sm:text-3xl block pt-5 lg:pt-10 pb-3 lg:pb-5">
            Microservices & Cloud
            </span>
            <div className="flex flex-1 flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 sm:gap-y-6">
              {backEndTech?.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className=" border-[1px] rounded-md border-blue-400 hover:border-green-500 justify-center items-center"
                  >
                    <div className="flex py-2 lg:py-4 px-2 sm:px-8 gap-2 sm:gap-3 animate-fade-up">
                      <span className="text-base md:text-xl lg:text-2xl font-extralight  ">
                        {tech?.tech}
                      </span>
                      <span className="text-white">{tech?.icon}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // className="p-10 bg-green-500 text-white text-center text-xl rounded-lg"
          >
            <span className="text-xl sm:text-3xl block pt-5 lg:pt-10 pb-3 lg:pb-5">
              Database
            </span>
            <div className="flex flex-1 flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 sm:gap-y-6 ">
              {dbAndTools?.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className=" border-[1px] rounded-md border-blue-400 hover:border-green-500 justify-center items-center "
                  >
                    <div className="flex py-2 lg:py-4 px-2 sm:px-8 gap-2 sm:gap-3">
                      <span className="text-base md:text-xl lg:text-2xl font-extralight  ">
                        {tech?.tech}
                      </span>
                      <span className="text-white">{tech?.icon}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // className="p-10 bg-green-500 text-white text-center text-xl rounded-lg"
          >
            <span className="text-xl sm:text-3xl block pt-5 lg:pt-10 pb-3 lg:pb-5">
            API Development & Testing Tools
            </span>
            <div className="flex flex-1 flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 sm:gap-y-6 ">
              {projectManagement?.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className=" border-[1px] rounded-md border-blue-400 hover:border-green-500 justify-center items-center "
                  >
                    <div className="flex py-2 lg:py-4 px-2 sm:px-8 gap-2 sm:gap-3">
                      <span className="text-base md:text-xl lg:text-2xl font-extralight  ">
                        {tech?.tech}
                      </span>
                      <span className="text-white">{tech?.icon}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
