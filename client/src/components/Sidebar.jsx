import React, { useState, useMemo } from "react";
import { ImProfile } from "react-icons/im";
import { MdMilitaryTech, MdCastForEducation } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { TbArrowsCross, TbArrowRightToArc } from "react-icons/tb";

import PersonalInfo from "../page/personalInfo";
import Experience from "../page/experience";
import Education from "../page/education";
import Project from "../page/project";
import AddTechnologies from "../page/addTechnologies";
const sideNavElements = [
  {
    name: "Profile",
    icon: ImProfile,
    component: PersonalInfo,
  },
  {
    name: "Skills",
    icon: MdMilitaryTech,
    component: AddTechnologies,
  },
  {
    name: "Experience",
    icon: SiExpertsexchange,
    component: Experience,
  },
  {
    name: "Education",
    icon: MdCastForEducation,
    component: Education,
  },
  {
    name: "Projects",
    icon: FaProjectDiagram,
    component: Project,
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectTab, setSelectTab] = useState("Profile");

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleTabClick = (tab) => {
    setSelectTab(tab?.name);
  };

  const selectedComponent = useMemo(() => {
    console.log("selectTab", selectTab);

    return sideNavElements.find((elements) => elements.name === selectTab);
  }, [selectTab]);
  console.log("selectedComponent", selectedComponent);

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full flex">
          <div
            className={`${
              isOpen ? "w-[18rem]" : "w-auto"
            } bg-[#111111] h-screen fixed`}
          >
            <div
              className={`flex ${
                isOpen ? "justify-end" : "justify-center"
              } p-2 text-gray-300 text-2xl`}
            >
              <div className="cursor-pointer">
                {isOpen ? (
                  <TbArrowsCross
                    className="cusror-pointer"
                    onClick={toggleSidebar}
                  />
                ) : (
                  <TbArrowRightToArc
                    className="cusror-pointer"
                    onClick={toggleSidebar}
                  />
                )}
              </div>
            </div>
            <div
              className={`w-full h-full flex gap-3 flex-col ${
                isOpen ? "p-3 text-xl" : "p-1 text-2xl"
              }`}
            >
              {sideNavElements?.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="p-2 rounded-md flex items-center gap-3 text-gray-300 hover:bg-gray-200 hover:text-gray-800 cursor-pointer"
                    onClick={() => handleTabClick(item)}
                  >
                    <item.icon />
                    {isOpen && (
                      <span className="pb-1 font-semibold">{item?.name}</span>
                    )}
                  </p>
                );
              })}
            </div>
          </div>
          <div
            className={`transition-all ${
              isOpen ? "ml-[17.5rem]" : "ml-[2.5rem]"
            } p-6 h-full w-full`}
          >
            {selectedComponent && <selectedComponent.component />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
