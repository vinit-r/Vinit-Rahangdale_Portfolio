import React, { useState, useCallback } from "react";
import InputField from "../components/InputField";
import FileInput from "../components/fileInput";
import ProjectCard from "../components/projectCard";
import ReusableModel from "../components/ReusableModel";
import { showToast } from "../components/Shared/Toaster";
import ModelPopup from "../components/Model";

const Project = () => {
  const initialProjectState = {
    projectName: "",
    projectImage: null,
    technology: "",
    projectGitUrl: "",
    projectDescription: "",
  };
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [project, setProject] = useState(initialProjectState);
  const [projectBucket, setProjectBucket] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setSelectedId(index);
    setOpenModal(true);
    setFile(projectBucket[index]?.projectImage);
    setPreview(projectBucket[index]?.projectImage);
    setProject(projectBucket[index]);
  };

  const clickOnSubmit = () => {
    if (
      project.projectName === "" ||
      preview === null ||
      project.technology === "" ||
      project.projectGitUrl === "" ||
      project.projectDescription === ""
    ) {
      return showToast(`All fields are required`, "warning");
    }
    if (isEditing) {
      setIsEditing(false);
      setProjectBucket((prev) =>
        prev.map((items, index) =>
          index === selectedId ? { ...project, projectImage: preview } : items
        )
      );
      setProject(initialProjectState);
      setFile(null);
      setPreview(null);
      showToast("Project updated successfully", "success");
      setOpenModal(false);
    } else {
      setProjectBucket([
        ...projectBucket,
        { ...project, projectImage: preview },
      ]);
      setProject(initialProjectState);
      setFile(null);
      setPreview(null);
      setOpenModal(false);
    }
  };

  const handleOnCancel = useCallback(() => {
    setIsEditing(false);
    setOpenModal(false);
    setProject(initialProjectState);
    setFile(null);
    setPreview(null);
  }, [isEditing, project]);

  const handleOnDeleteClick = useCallback((deleteId) => {
    setIsPopup(true);
    setSelectedId(deleteId);
  }, []);

  const handleOnDeleteConfirm = useCallback(() => {
    setProjectBucket((prev) => prev.filter((_, index) => index !== selectedId));
    setIsPopup(false);
    showToast("Record deleted successfully", "success");
  }, [projectBucket, selectedId]);

  return (
    <div className="h-full w-full">
      {/* <div className="w-full h-full gap-5"> */}
      <div className="mb-3 text-white text-lg font-semibold">
        <button
          className="py-2 px-4 flex justify-center items-center bg-[#28282B] rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Add Project
        </button>
      </div>
      {openModal && (
        <ReusableModel>
          <div className="flex flex-col p-2">
            <div className="flex gap-3 mb-3">
              <InputField
                label={"Project Name"}
                type={"text"}
                name={"projectName"}
                id={"projectName"}
                placeholder={"Enter your Project Name"}
                handleOnChange={handleOnChange}
                value={project.projectName}
              />
              <FileInput
                setPreview={setPreview}
                preview={preview}
                setFile={setFile}
                file={file}
              />
            </div>

            <div className="flex gap-3 mb-3">
              <InputField
                label={"Technology Used"}
                type={"text"}
                name={"technology"}
                id={"technology"}
                placeholder={"Javascript, Nodejs, React"}
                handleOnChange={handleOnChange}
                value={project.technology}
              />
              <InputField
                label={"Git Url"}
                type={"text"}
                name={"projectGitUrl"}
                id={"projectGitUrl"}
                placeholder={"https://github.com"}
                // disabled={isPresent}
                handleOnChange={handleOnChange}
                value={project.projectGitUrl}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="projectDescription"
                className="mb-3 block text-base font-medium text-white"
              >
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={project.projectDescription}
                onChange={handleOnChange}
                placeholder="Finish by in 50 words"
                className="w-full rounded-md bg-[#28282B] py-3 px-6 text-base font-medium text-gray-300"
              />
            </div>

            <div className="flex gap-3 justify-center">
              <button
                className="hover:shadow-form w-[10rem] rounded-md bg-[#1d2d44] p-2 text-center text-base font-semibold text-white outline-none"
                onClick={clickOnSubmit}
              >
                {isEditing ? "Update" : "Save Details"}
              </button>
              <button
                className="hover:shadow-form w-[10rem] rounded-md bg-[#403d39] p-2 text-center text-base font-semibold text-white outline-none"
                onClick={handleOnCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </ReusableModel>
      )}

      <div className="flex w-full">
        <div className="flex flex-wrap w-full gap-3">
          {projectBucket?.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              project={project}
              handleEdit={handleEdit}
              handleOnDeleteClick={handleOnDeleteClick}
              isEditing={isEditing}
            />
          ))}
        </div>
      </div>

      {isPopup && (
        <ModelPopup
          setIsPopup={setIsPopup}
          handleOnDeleteConfirm={handleOnDeleteConfirm}
        />
      )}
    </div>
    // </div>
  );
};

export default Project;
