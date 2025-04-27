import React from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import { showToast } from "../components/Shared/Toaster";

const ProjectCard = (props) => {
  const { project, index, handleEdit, handleOnDeleteClick, isEditing } = props;

  return (
    <div class="flex flex-col bg-[#28282B] shadow-sm rounded-lg w-80">
      <div class="relative h-40 overflow-hidden text-white rounded-md">
        <img
          className="object-cover w-full h-full"
          // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          src={project?.projectImage}
          alt="card-image"
        />
        <div className="absolute top-0 right-0 flex gap-2 p-2">
          <FaUserEdit
            onClick={() => handleEdit(index)}
            className="hover:text-gray-400 cursor-pointer text-3xl pb-2"
          />
          <FaTrash
            onClick={
              !isEditing
                ? () => handleOnDeleteClick(index)
                : () => {
                    showToast(
                      "Can't Delete White Record is in the update state"
                    );
                  }
            }
            className="hover:text-gray-400 cursor-pointer text-3xl pb-2 text-red-500"
          />
        </div>
      </div>
      {/* <div className="absolute h-full w-full top-0 right-0 p-4 text-white bg-opacity-50 backdrop-blur-[1px] bg-black"> */}
      <div class="px-4 py-1 text-white ">
        <h6 class="mb-1 text-xl font-semibold">{project?.projectName}</h6>
        <p class="leading-normal font-light">
          <span className="font-semibold">Tech :</span> {project?.technology}
        </p>
        <p class=" w-full h-32 font-light overflow-auto [&::-webkit-scrollbar]:hidden">
          {project?.projectDescription}
        </p>
      </div>
      <div class="px-4 pb-4 pt-2 w-full">
        <a
          className="rounded-md cursor-pointer bg-slate-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          href={project?.projectGitUrl}
        >
          Git Link
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProjectCard;
