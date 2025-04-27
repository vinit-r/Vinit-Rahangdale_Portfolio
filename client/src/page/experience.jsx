import React, { useState, useEffect, useMemo, useCallback } from "react";
import { showToast } from "../components/Shared/Toaster";
import InputField from "../components/InputField";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import ModelPopup from "../components/Model";
import ReusableModel from "../components/ReusableModel";

const Experience = () => {
  const [experience, setExperience] = useState({
    designation: "Software Developer",
    company: "EmiXchange Pvt. Ltd.",
    startDate: "05/03/2025",
    endDate: "06/03/2025",
    description:
      "Full-stack developer adept in MERN stack. Proven record in client collaboration, requirement analysis, and product roadmap development, resulting in a 20% boost in customer satisfaction.",
    city: "Indore",
    state: "Madhya Pradesh",
  });
  const [isPresent, setIsPresent] = useState(false);
  const [experienceBucket, setExperienceBucket] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let today = new Date().toISOString().split("T")[0];

    if (name === "startDate" && value > today) {
      return showToast(
        "Start date can't be greater than today's date",
        "warning"
      );
    }
    if (name === "endDate" && value < experience.startDate) {
      return showToast("End date can't be less than start date", "warning");
    }
    setExperience({
      ...experience,
      [name]: value,
    });
  };

  const onSaveClick = useCallback(() => {
    console.log("onSaveClick");
    if (
      experience.designation === "" ||
      experience.company === "" ||
      experience.startDate === "" ||
      experience.endDate === "" ||
      experience.city === "" ||
      experience.state === "" ||
      experience.description === ""
    ) {
      return showToast(`All fields are required`, "warning");
    }
    if (isEditing) {
      setIsEditing(false);
      setExperienceBucket((prev) =>
        prev.map((items, index) =>
          index === selectedId ? { ...experience } : items
        )
      );
      setOpenModal(false);
      showToast("Experience updated successfully", "success");
      setExperience({
        designation: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        city: "",
        state: "",
      });
    } else {
      setExperienceBucket([...experienceBucket, experience]);
      setExperience({
        designation: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        city: "",
        state: "",
      });
      showToast("Experience added successfully", "success");
      setOpenModal(false);
    }
  }, [experienceBucket, experience]);

  const handleEdit = useCallback(
    (index) => {
      setIsEditing(true);
      setOpenModal(true);
      setSelectedId(index);
      setExperience(experienceBucket[index]);
    },
    [experienceBucket]
  );

  const handleOnCancel = useCallback(() => {
    setIsEditing(false);
    setOpenModal(false);
    setExperience({
      designation: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      city: "",
      state: "",
    });
  }, [isEditing, experience]);

  const handleOnDeleteClick = useCallback((deleteId) => {
    setIsPopup(true);
    setSelectedId(deleteId);
  }, []);

  const handleOnDeleteConfirm = useCallback(() => {
    setExperienceBucket((prev) =>
      prev.filter((_, index) => index !== selectedId)
    );
    setIsPopup(false);
    showToast("Record deleted successfully", "success");
  }, [experienceBucket, selectedId]);

  return (
    <div className="h-full w-full">
      {/* <div className="w-full h-full flex gap-5"> */}
      <div className="mb-3 text-white text-lg font-semibold">
        <button
          className="py-2 px-4 flex justify-center items-center bg-[#28282B] rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Add Experience
        </button>
      </div>

      {OpenModal && (
        <ReusableModel>
          <div className="flex flex-col p-2">
            <div className="flex gap-3 mb-3">
              <InputField
                label={"Designation"}
                type={"text"}
                name={"designation"}
                id={"designation"}
                placeholder={"Enter your designation"}
                handleOnChange={handleOnChange}
                value={experience.designation}
              />
              <InputField
                label={"Company Name"}
                type={"text"}
                name={"company"}
                id={"company"}
                placeholder={"Entye your company name"}
                handleOnChange={handleOnChange}
                value={experience.company}
              />
            </div>
            <div className="flex mb-2 justify-end">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  onClick={() => setIsPresent(!isPresent)}
                  className="w-4 h-4 rounded-sm"
                />
                <label className="ms-2 text-white text-base font-medium">
                  Present
                </label>
              </div>
            </div>

            <div className="flex gap-3 mb-3">
              <InputField
                label={"Start Date"}
                type={"date"}
                name={"startDate"}
                id={"startDate"}
                handleOnChange={handleOnChange}
                value={experience.startDate}
              />
              <InputField
                label={"End Date"}
                type={"date"}
                name={"endDate"}
                id={"endDate"}
                disabled={isPresent}
                handleOnChange={handleOnChange}
                value={experience.endDate}
              />
            </div>

            <div className="flex gap-3 mb-3">
              <InputField
                label={"City"}
                type={"text"}
                name={"city"}
                id={"city"}
                placeholder={"Pune"}
                handleOnChange={handleOnChange}
                value={experience.city}
              />
              <InputField
                label={"State"}
                type={"text"}
                name={"state"}
                id={"state"}
                placeholder={"Maharashtra"}
                handleOnChange={handleOnChange}
                value={experience.state}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-white"
              >
                Job Description
              </label>
              <textarea
                name="description"
                value={experience.description}
                onChange={handleOnChange}
                placeholder="Finish by in 50 words"
                className="w-full rounded-md bg-[#28282B] py-3 px-6 text-base font-medium text-gray-300"
              />
            </div>

            <div className="flex gap-3 justify-center">
              <button
                className="hover:shadow-form w-[10rem] rounded-md bg-[#1d2d44] p-2 text-center text-base font-semibold text-white outline-none"
                // onClick={!isEditing ? onSaveClick : handleUpdate}
                onClick={onSaveClick}
              >
                {isEditing ? "Update" : "Save Details"}
              </button>
              {/* {isEditing && ( */}
                <button
                  className="hover:shadow-form w-[10rem] rounded-md bg-[#403d39] p-2 text-center text-base font-semibold text-white outline-none"
                  onClick={handleOnCancel}
                >
                  Cancel
                </button>
               {/* )} */}
            </div>
          </div>
        </ReusableModel>
      )}

      <div className="flex w-full">
        <div className="flex flex-wrap w-full gap-3">
          {experienceBucket &&
            experienceBucket.map((experience, index) => (
              <div
                key={index}
                className="w-96 p-4 bg-[#111111] rounded-lg text-white font-normal"
              >
                <div className="flex justify-between">
                  <span className="mb-2 pr-3 text-2xl font-bold">
                    {experience?.company}
                    {/* {experience?.company} The Rapid Hire Pvt. Ltd. */}
                  </span>
                  <div className="flex gap-2">
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
                <p className="font-semibold text-lg text-gray-300">
                  {experience?.designation}
                  {/* {experience?.designation} JASCKASoftware Developer */}
                </p>
                <p className="flex gap-3 text-gray-400">
                  <span>{experience?.startDate}</span>
                  <span>To</span>
                  <span>{experience?.endDate}</span>
                  {/* <span>{experience?.startDate}</span> <span>12/12/2012</span>
                <span>{experience?.startDate}</span> <span>To</span>
                <span>{experience?.startDate}</span> <span>12/12/2012</span> */}
                </p>
                <p className="text-gray-400">
                  <span>
                    {experience?.city}, {experience?.state}
                  </span>
                  {/* <span>{experience?.city}+ "," +{experience?.city}</span>Pune, Maharashtra */}
                </p>
                <p className="text-gray-400">
                  {experience?.description}
                  {/* {experience?.description} Full-stack developer adept in
                MERN stack. Proven record in client collaboration, requirement
                analysis, and product roadmap development, resulting in a 20%
                boost in customer satisfaction. */}
                </p>
              </div>
            ))}
          {/* </div> */}
        </div>
      </div>

      {isPopup && (
        <ModelPopup
          setIsPopup={setIsPopup}
          handleOnDeleteConfirm={handleOnDeleteConfirm}
        />
      )}
      {/* </div> */}
    </div>
  );
};

export default Experience;
