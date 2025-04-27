import React from "react";

const ModelPopup = (props) => {
  const { setIsPopup, handleOnDeleteConfirm } = props;
  return (
    <div class="pointer-events-auto fixed inset-0 z-40 grid h-screen w-screen place-items-center bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ">
      <div class="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-[#111111] shadow-lg border border-gray-800">
        <div class="flex shrink-0 items-center pb-4 text-2xl font-semibold text-white">
          Delete Confirmation
        </div>
        <div class="relative border-t border-gray-100 py-4 leading-normal text-gray-300 font-light">
          Are you sure you want to permanently delete this item? This action
          cannot be undone, and the data will be lost forever.
        </div>
        <div class="flex shrink-0 flex-wrap items-center pt-4 justify-end">
          <button
            class="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-white hover:bg-slate-100 hover:text-black focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => setIsPopup(false)}
          >
            Cancel
          </button>
          <button
            class="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
            onClick={handleOnDeleteConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelPopup;
