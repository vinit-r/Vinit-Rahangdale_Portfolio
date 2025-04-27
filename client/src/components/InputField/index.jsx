import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  placeholder,
  type,
  value,
  handleOnChange,
  name,
  id,
  labelStyle,
  inputStyle,
  divStyle,
  disabled,
}) => {
  return (
    <div className={`w-full ${divStyle}`}>
      <div className="">
        <label
          htmlFor={id}
          className={`mb-3 block text-base font-medium ${
            disabled ? "text-gray-600" : "text-white"
          }  ${labelStyle}`}
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          disabled={disabled}
          className={`w-full rounded-md bg-[#28282B] py-2 px-4 text-base font-medium ${
            disabled ? "text-gray-600" : "text-gray-300"
          }  outline-none ${inputStyle}`}
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "file", "date", "number"])
    .isRequired,
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelStyle: PropTypes.string,
  inputStyle: PropTypes.string,
  divStyle: PropTypes.string,
  acceptedFileTypes: PropTypes.arrayOf(PropTypes.string),
  maxFileSize: PropTypes.number, // in bytes
};

export default React.memo(InputField);
