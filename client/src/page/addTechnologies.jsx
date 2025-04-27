import React, { useCallback, useState } from "react";
import InputField from "../components/InputField";
import Select from "../components/Select";
import { categoryOptions, proficiencyOptions } from "../JsonData";
import ReusableModel from "../components/ReusableModel";
import FileInput from "../components/fileInput";
import img from '../../public/image/Chat_Bot.jpg'

const AddTechnologies = () => {
  const initialTechState = {
    technologyName: "",
    icon: null,
    category: "",
    proficiency: "",
  };

  const [addTech, setAddTech] = useState(initialTechState);
  const [addTechBucket, setAddTechBucket] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isPopup, setIsPopup] = useState(false);
  

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setAddTech({ ...addTech, [name]: value });
  };
  console.log("addTech", addTech);

  const handleOnCancel = useCallback(() => {
    // setIsEditing(false);
    setOpenModal(false);
    setAddTech(initialTechState);
    // setFile(null);
    // setPreview(null);
  }, [addTech]);

  return (
    <div className="h-full w-full">
      <div className="mb-3 text-white text-lg font-semibold">
        <button
          className="py-2 px-4 flex justify-center items-center bg-[#28282B] rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Add Technologies
        </button>
      </div>
      {openModal && (
        <ReusableModel>
          <div className="flex flex-col p-2">
            <div className="flex gap-3 mb-3">
              <InputField
                label={"Technology Name"}
                type={"text"}
                name={"technologyName"}
                id={"technologyName"}
                placeholder={"Node.js"}
                handleOnChange={handleOnChange}
                value={addTech.technologyName}
              />
              <FileInput
                setPreview={setPreview}
                preview={preview}
                setFile={setFile}
                file={file}
              />
            </div>
            <div className="flex gap-3 mb-5">
              <Select
                label={"Category"}
                name={"category"}
                id={"category"}
                options={categoryOptions}
                handleOnChange={handleOnChange}
                value={addTech.category}
              />

              <Select
                label={"Proficiency"}
                name={"proficiency"}
                id={"proficiency"}
                options={proficiencyOptions}
                handleOnChange={handleOnChange}
                value={addTech.proficiency}
              />
            </div>
            <div className="flex gap-3 justify-center">
              <button
                className="hover:shadow-form w-[10rem] rounded-md bg-[#1d2d44] p-2 text-center text-base font-semibold text-white outline-none"
                // onClick={clickOnSubmit}
              >
                {/* {isEditing ? "Update" : "Save Details"} */} Save Details
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
      <div className="flex gap-3 w-full">
        <div className="flex gap-2 px-4 rounded-md border border-blue-500 text-white items-center justify-center">
          <p className="text-lg font-semibold">React.Js</p>
           <img src={img} alt="" className="w-[5rem] h-[5rem] object-cover bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default AddTechnologies;
