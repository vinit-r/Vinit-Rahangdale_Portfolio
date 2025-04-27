import React from "react";

const Select = (props) => {
  const { label, id, options, divStyle, selectStyle, handleOnChange, value, name } =
    props;
  return (
    <div className={`w-full ${divStyle}`}>
      <label
        htmlFor={id}
        className="mb-3 block text-base font-medium text-white"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        onChange={handleOnChange}
        className={`w-full rounded-md bg-[#28282B] py-2 px-4 text-base font-medium text-gray-300 outline-none ${selectStyle}`}
      >
        <option value={value} selected>
          Select {label}
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
