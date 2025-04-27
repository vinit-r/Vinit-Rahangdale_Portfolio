import React from "react";
import PersonalInfo from "./personalInfo";
import Experience from "./experience";
import Education from "./education";
import Project from "./project";
import AddTechnologies from "./addTechnologies";

const steps = [
  {
    id: 1,
    title: "Enter Your Personal Information.",
    component: PersonalInfo
  },
  {
    id: 2,
    title: "Enter Technologies Which You Know.",
    component: AddTechnologies
  },
  {
    id: 3,
    title: "Experience Details",
    component: Experience
  },
  {
    id: 4,
    title: "Education Details",
    component: Education
  },
  {
    id: 5,
    title: "Add Projects",
    component: Project
  }
];

const StepItem = ({ step }) => {
  const StepComponent = step.component;
  
  return (
    <li className="relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-[#f06464] after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
      <a className="flex items-start font-medium w-full">
        <span className="w-8 h-8 aspect-square bg-[#f06464] border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
          {step.id}
        </span>
        <div className="block sm:w-3/4">
          <h4 className="text-base text-black mb-2">{step.title}</h4>
          <StepComponent />
        </div>
      </a>
    </li>
  );
};

const Stepar = () => {
  return (
    <ol className="overflow-hidden space-y-8 font-proxima-nova p-20">
      {steps.map(step => (
        <StepItem key={step.id} step={step} />
      ))}
    </ol>
  );
};

export default Stepar;

