import React, { useState, useCallback, useRef, useEffect } from "react";
import { FaRegImages } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { showToast } from "../components/Shared/Toaster";

const FileInput = (props) => {
  const {
    fileType = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
      "image/webp",
      "image/svg+xml",
    ],
    maxFileSize = 5 * 1024 * 1024,
    setPreview,
    preview,
    file,
    setFile,
  } = props;

  const uploadFileRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (uploadFileRef.current) {
      uploadFileRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile)
      return showToast("Something went wrong, No file selected", "error");

    if (!fileType.includes(selectedFile.type)) {
      return showToast("Unsupported file type");
    }
    if (selectedFile.size > maxFileSize) {
      return showToast("File too large, upload file up to 5 MB", "error");
    }
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    return showToast("File uploaded", "success");
  };

  const handleFileDelete = useCallback(
    (e) => {
      e.stopPropagation();
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      setFile(null);
      setPreview(null);
      if (uploadFileRef.current) {
        uploadFileRef.current.value = "";
      }
      return showToast("File deleted successfully", "success");
    },
    [preview, setFile, setPreview]
  );

  return (
    <div className={`w-full`}>
      <div className="">
        <label className={`mb-3 block text-base font-medium text-white`}>
          File Upload
        </label>
        <div className="relative">
          <input
            type="file"
            ref={uploadFileRef}
            onChange={handleFileChange}
            className={`w-full rounded-md py-1 px-4 text-base font-medium text-gray-600 outline-none`}
          />
          <div
            className="absolute flex justify-center items-center text-4xl text-gray-500 rounded-md bg-[#28282B] cursor-pointer inset-0 z-10"
            onClick={handleClick}
          >
            {!file ? (
              <FaRegImages />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-center gap-2">
                <span className="px-4 text-sm overflow-hidden whitespace-nowrap text-gray-300">
                  {preview}
                </span>
                <RxCross2
                  className="p-1 bg-red-500 rounded-md text-white"
                  onClick={handleFileDelete}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
