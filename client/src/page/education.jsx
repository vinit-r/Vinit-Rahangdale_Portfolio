import React, { useState, useCallback } from "react";
import InputField from "../components/InputField";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import { showToast } from "../components/Shared/Toaster";
import ModelPopup from "../components/Model";
import ReusableModel from "../components/ReusableModel";

const Education = () => {
  const [education, setEducation] = useState({
    institute: "",
    degree: "",
    percentage: "",
    startDate: "",
    endDate: "",
    city: "",
    state: "",
  });
  const [educationBucket, setEducationBucket] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isPopup, setIsPopup] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
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
    if (name === "endDate" && value < education.startDate) {
      return showToast("End date can't be less than start date", "warning");
    }
    setEducation({
      ...education,
      [name]: value,
    });
    console.log("education", education);
  };
  const onSaveClick = useCallback(() => {
    console.log("onSaveClick");
    if (
      education.institute === "" ||
      education.degree === "" ||
      education.percentage === "" ||
      education.startDate === "" ||
      education.endDate === "" ||
      education.state === "" ||
      education.city === ""
    ) {
      return showToast(`All fields are required`, "warning");
    }
    if (isEditing) {
      setIsEditing(false);
      setEducationBucket((prev) =>
        prev.map((items, index) =>
          index === selectedId ? { ...education } : items
        )
      );
      showToast("Education updated successfully", "success");
      setOpenModal(false);
      setEducation({
        institute: "",
        degree: "",
        percentage: "",
        startDate: "",
        endDate: "",
        city: "",
        state: "",
      });
    } else {
      setEducationBucket([...educationBucket, education]);
      setEducation({
        institute: "",
        degree: "",
        percentage: "",
        startDate: "",
        endDate: "",
        city: "",
        state: "",
      });
      showToast("Education added successfully", "success");
      setOpenModal(false);
    }
  }, [educationBucket, education]);

  const handleEdit = useCallback(
    (index) => {
      setIsEditing(true);
      setOpenModal(true);
      setSelectedId(index);
      setEducation(educationBucket[index]);
    },
    [educationBucket]
  );
  const handleOnCancel = useCallback(() => {
    setIsEditing(false);
    setOpenModal(false);
    setEducation({
      institute: "",
      degree: "",
      percentage: "",
      startDate: "",
      endDate: "",
      city: "",
      state: "",
    });
  }, [isEditing, education]);
  const handleOnDeleteClick = useCallback((deleteId) => {
    setIsPopup(true);
    setSelectedId(deleteId);
  }, []);
  const handleOnDeleteConfirm = useCallback(() => {
    setEducationBucket((prev) =>
      prev.filter((_, index) => index !== selectedId)
    );
    setIsPopup(false);
    showToast("Record deleted successfully", "success");
  }, [educationBucket, selectedId]);

  return (
    <div className="h-full w-full">
      {/* <div className="w-full h-full flex gap-5"> */}
      <div className="mb-3 text-white text-lg font-semibold">
        <button
          className="py-2 px-4 flex justify-center items-center bg-[#28282B] rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Add Education
        </button>
      </div>
      {OpenModal && (
        <ReusableModel>
          <div className="flex flex-col p-2">
            <div className="flex gap-3 mb-3">
              <InputField
                label={"College Name"}
                type={"text"}
                name={"institute"}
                id={"institute"}
                placeholder={"Enter your college Name"}
                handleOnChange={handleOnChange}
                value={education.institute}
              />
              <InputField
                label={"Degree"}
                type={"text"}
                name={"degree"}
                id={"degree"}
                placeholder={"B.Tech"}
                divStyle={"sm:!w-1/2"}
                handleOnChange={handleOnChange}
                value={education.degree}
              />
              <InputField
                label={"Percentage"}
                type={"number"}
                name={"percentage"}
                id={"percentage"}
                placeholder={"85"}
                divStyle={"sm:!w-1/2"}
                handleOnChange={handleOnChange}
                value={education.percentage}
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
                value={education.startDate}
              />
              <InputField
                label={"End Date"}
                type={"date"}
                name={"endDate"}
                id={"endDate"}
                disabled={isPresent}
                handleOnChange={handleOnChange}
                value={education.endDate}
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
                value={education.city}
              />
              <InputField
                label={"State"}
                type={"text"}
                name={"state"}
                id={"state"}
                placeholder={"Maharashtra"}
                handleOnChange={handleOnChange}
                value={education.state}
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
          {educationBucket &&
            educationBucket.map((education, index) => (
              <div
                key={index}
                className="w-96 p-4 bg-[#111111] rounded-lg text-white font-normal"
              >
                <div className="flex justify-between">
                  <span className="mb-2 text-2xl font-bold">
                    {education?.institute}
                    {/* The Rapid Hire Pvt. Ltd. */}
                  </span>
                  <div className="flex gap-3">
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
                                "Can't Delete While Record is in the update state"
                              );
                            }
                      }
                      className="hover:text-gray-400 cursor-pointer text-3xl pb-2 text-red-500"
                    />
                  </div>
                </div>
                <p className="font-semibold text-lg text-gray-300">
                  {education?.degree} - {education?.percentage}
                  {/* Software Developer */}
                </p>
                <p className="flex gap-3 text-gray-400">
                  <span>{education?.startDate}</span>
                  <span>To</span>
                  <span>{education?.endDate}</span>
                  {/* <span>12/12/2012</span>
                <span>To</span>
                <span>12/12/2012</span> */}
                </p>
                <p className="text-gray-400">
                  <span>
                    {education?.city}, {education?.state}
                  </span>
                  {/* <span>Pune, Maharashtra</span> */}
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
    </div>
    // </div>
  );
};

export default Education;
