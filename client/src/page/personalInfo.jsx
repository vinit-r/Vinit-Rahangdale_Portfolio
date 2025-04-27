import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { FaUserEdit, FaFileCode } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";

import axiosInstance from "../api/interseptor";

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    totalExperience: "",
    totalProjects: "",
    totalCertification: "",
    description: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get(
        "/user/get?email=navnit76@gmail.com"
      );
      console.log("response", response?.data?.data);

      if (response.data) {
        setUserData(response.data?.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isEditing) {
        response = await axiosInstance.put(
          `/user/update/${userData._id}`,
          userData
        );
      } else {
        response = await axiosInstance.post("/user/create", userData);
      }

      if (response.data.data) {
        setUserData(response.data.data);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    fetchUserData(); // Reset to original data
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center">
        {isEditing ? (
          <div className="bg-[#111111] text-white rounded-lg p-6">
            <div className="flex flex-col p-2">
              <div className="flex gap-3 mb-3">
                <InputField
                  label={"First Name"}
                  type={"text"}
                  name={"firstName"}
                  id={"firstName"}
                  placeholder={"First Name"}
                  value={userData.firstName}
                  handleOnChange={handleOnChange}
                />
                <InputField
                  label={"Last Name"}
                  type={"text"}
                  name={"lastName"}
                  id={"lastName"}
                  placeholder={"Last Name"}
                  value={userData.lastName}
                  handleOnChange={handleOnChange}
                />
              </div>
              <div className="flex gap-3 mb-3">
                <InputField
                  label={"Phone Number"}
                  type={"number"}
                  name={"phone"}
                  id={"phone"}
                  placeholder={"Enter your phone number"}
                  value={userData.phone}
                  handleOnChange={handleOnChange}
                />
                <InputField
                  label={"Email"}
                  type={"email"}
                  name={"email"}
                  id={"email"}
                  placeholder={"Enter your Email Id"}
                  value={userData.email}
                  handleOnChange={handleOnChange}
                />
              </div>
              <div className="flex gap-3 mb-3">
                <InputField
                  label={"DOB"}
                  type={"date"}
                  name={"dob"}
                  id={"dob"}
                  placeholder={"Last Name"}
                  value={userData.dob}
                  handleOnChange={handleOnChange}
                />

                <InputField
                  label={"Total Experience"}
                  type={"number"}
                  name={"totalExperience"}
                  id={"totalExperience"}
                  placeholder={"5"}
                  value={userData.totalExperience}
                  handleOnChange={handleOnChange}
                />
              </div>
              <div className="flex gap-3 mb-3">
                <InputField
                  label={"Total Projects"}
                  type={"number"}
                  name={"totalProjects"}
                  id={"totalProjects"}
                  placeholder={"7"}
                  value={userData.totalProjects}
                  handleOnChange={handleOnChange}
                />
                <InputField
                  label={"Certification"}
                  type={"number"}
                  name={"totalCertification"}
                  id={"totalCertification"}
                  placeholder={"5"}
                  value={userData.totalCertification}
                  handleOnChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="aboutMe"
                  className="mb-3 block text-base font-medium text-white"
                >
                  About Me
                </label>
                <textarea
                  name="description"
                  placeholder="Write about yourself"
                  onChange={handleOnChange}
                  value={userData.description}
                  className="w-full rounded-md bg-[#28282B] py-3 px-6 text-base font-medium text-gray-300"
                />
              </div>
              <div className="flex justify-center gap-5">
                <button
                  onClick={handleOnSubmit}
                  className="rounded-md bg-[#1d2d44] p-2 w-[10rem] text-center text-base font-semibold text-white outline-none"
                >
                  Update Details
                </button>
                <button
                  onClick={handleCancel}
                  className="rounded-md bg-[#403d39] p-2 w-[10rem] text-center text-base font-semibold text-white outline-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#111111] text-white rounded-lg p-6">
            <div>
              <div className="flex justify-between p-2">
                <span className="text-3xl font-semibold border-l-[0.4rem] border-green-200 pl-2 rounded-md">
                  User Details
                </span>
                <FaUserEdit
                  onClick={handleEdit}
                  className="hover:text-gray-400 cursor-pointer text-3xl pb-2"
                />
              </div>
              <div className="flex flex-col p-2">
                <p className="text-2xl ">{`${userData.firstName} ${userData.lastName}`}</p>
                <div className="flex gap-10 py-5">
                  <p className="flex flex-col">
                    <span className="font-semibold text-gray-400">Role</span>
                    <span className="text-lg">SoftWare Developer</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold text-gray-400">
                      Phone Number
                    </span>
                    <span className="text-lg">+91 {userData.phone}</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold text-gray-400">
                      Email Address
                    </span>
                    <span className="text-lg">{userData.email}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 p-2">
                <div className="flex gap-3 items-center bg-[#28282B] w-[12rem] p-2 rounded-lg">
                  <SiExpertsexchange className="text-2xl" />
                  <p className="flex flex-col">
                    <span className="text-xl">{userData.totalExperience}+</span>
                    <span className="text-semibold text-gray-300">
                      Experience
                    </span>
                  </p>
                </div>
                <div className="flex gap-3 items-center bg-[#28282B] w-[12rem] p-2 rounded-lg">
                  <FaFileCode className="text-2xl" />
                  <p className="flex flex-col">
                    <span className="text-xl">{userData.totalProjects}+</span>
                    <span className="text-semibold text-gray-300">
                      Projects
                    </span>
                  </p>
                </div>
                <div className="flex gap-3 items-center bg-[#28282B] w-[12rem] p-2 rounded-lg">
                  <PiCertificateFill className="text-2xl" />
                  <p className="flex flex-col">
                    <span className="text-xl">
                      {userData.totalCertification}+
                    </span>
                    <span className="text-semibold text-gray-300">
                      Certificate
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-2">
                <p className="text-gray-400 font-semibold text-xl py-2">
                  Description
                </p>
                <p>{userData.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
