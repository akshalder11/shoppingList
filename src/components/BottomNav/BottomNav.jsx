import React, { useState } from "react";
import Back from "../SVGs/Back";
import Add from "../SVGs/Add";
import Delete from "../SVGs/Delete";
import toast, { Toaster } from "react-hot-toast";

const BottomNav = ({ addItemToggle, setItemArray, setLocalStorage }) => {
  const [modalView, setModalView] = useState(false);

  const open = () => {
    addItemToggle(true);
  };

  const close = () => {
    addItemToggle(false);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      {/* Back button */}
      <div className="bottomNav flex justify-center items-center bottom-4 left-0 fixed w-[100%]">
        <div
          className="w-[71px] h-[71px] mx-3 bg-white rounded-[59px] shadow-xl p-[18px]"
          onClick={close}
        >
          <Back />
        </div>

        {/* Add button */}
        <div
          className="w-[71px] h-[71px] mx-3 bg-white rounded-[59px] shadow-xl p-[18px]"
          onClick={open}
        >
          <Add />
        </div>

        {/* Delete button */}
        <div
          className="w-[71px] h-[71px] mx-3 bg-white rounded-[59px] shadow-xl p-[18px]"
          onClick={() => {
            const removeArray = [];
            console.log(removeArray);
            setItemArray(removeArray);
            setLocalStorage(removeArray);
            toast.success("List cleared successfully");
          }}
        >
          <Delete />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
