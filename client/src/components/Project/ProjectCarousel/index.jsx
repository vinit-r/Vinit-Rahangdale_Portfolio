import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// import image from "../../../../public/image/Digital_Visiting.jpg";
import { ProjectsData, CompanyProjects } from "../../../JsonData";
import ProjectCards from "../Cards";
import Heading from "../../Heading";

function ProjectCarousel() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full py-5 px-2 lg:px-28" id="projects">
      <Heading text={"Projects"} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container px-5 py-1"
      >
        {/* <div className=""> */}
        <div className="relative">
          <Slider {...settings} className="">
            {ProjectsData.map((data, index) => (
              <div key={index} className="px-0 md:px-3">
                <ProjectCards
                  image={data?.image}
                  git={data?.git}
                  link={data?.link}
                  ProjectName={data?.name}
                  projectTech={data?.tech}
                />
              </div>
            ))}
            {/* {[...Array(6)].map((_, index) => (
              <div key={index} className="p-3">
                <ProjectCards
                  image={image}
                  ProjectName={"Netflix Clone"}
                  projectTech={"React Js, Firebase, Tailwind Css, JavaScript"}
                />
              </div>
            ))} */}
          </Slider>
        </div>
        {/* </div> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col mt-10"
      >
        {/* <div className=""> */}
        <div className="text-white font-bold">
          <span className="text-xl sm:text-3xl font-MoonWalk block pb-3 sm:pb-5">
            Company Projects
          </span>
        </div>
        <div className="flex flex-wrap gap-5 lg:mx-3 mx-0 cursor-pointer justify-center align-center">
          {CompanyProjects?.map((data, Index) => (
            <div
              key={Index}
              className="block w-full md:w-[20rem] p-3 bg-[#111111] rounded-lg shadow-sm border-[1px] border-gray-700"
            >
              <h5 className="mb-2 md:text-xl text-base font-bold text-white leading-tight">
                {data?.name}
              </h5>
              <p className="md:text-base text-sm font-bold text-gray-300">
                {data?.company}
              </p>
              <p className="text-sm md:font-normal text-gray-400">{data?.tech}</p>
            </div>
          ))}
        </div>
        {/* </div> */}
      </motion.div>
    </div>
  );
}

export default ProjectCarousel;
