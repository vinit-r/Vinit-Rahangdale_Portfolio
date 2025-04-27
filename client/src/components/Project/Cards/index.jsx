import React from "react";

const ProjectCards = (props) => {
  const { image, ProjectName, projectTech, git, link } = props;

  return (
    <>
      {/* <div
        className='group relative h-[18rem] w-full flex flex-col  rounded-md shadow-[0_1px_20px_-10px_white] overflow-hidden cursor-pointer'
        // data-aos={'zoom-in-right'}
      >
        <div
          className='h-full w-full bg-cover bg-no-repeat bg-center rounded-md'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-md text-white'>
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-3 rounded-md backdrop-blur-[1.5px] translate-y-[100%] group-hover:translate-y-0 ease-out duration-200'>
            <h1 className='md:text-xl text-sm font-bold'>{ProjectName}</h1>
            <p className='md:text-md text-xs'>{projectTech}</p>
          </div>
        </div>
      </div> */}
      <div
        className="max-w-sm rounded-lg bg-cover bg-no-repeat bg-center shadow-lg h-[14rem] w-full border-[1px] border-gray-700"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="h-full w-full p-6 rounded-lg flex flex-col justify-between"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div>
            <h5 className="mb-2 md:text-xl text-sm font-bold text-white leading-tight">
              {ProjectName}
            </h5>
            <p className="mb-4 text-base text-gray-300">{projectTech}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => window.open(git, "_blank")}
              disabled={!git}
              type="button"
              className={`inline-block rounded border-[1px] border-gray-700 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 ${
                git ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              data-twe-ripple-init
            >
              Git Link
            </button>
            <button
              onClick={() => window.open(link, "_blank")}
              disabled={!link}
              type="button"
              className={`inline-block rounded border-[1px] border-gray-700 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 ${
                link ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              data-twe-ripple-init
            >
              Live Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
