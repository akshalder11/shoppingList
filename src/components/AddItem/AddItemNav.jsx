import React, { forwardRef, useImperativeHandle } from "react";
import Back from "../SVGs/Back";
import Save from "../SVGs/Save";

const AddItemNav = ({ setBottomNavToggle, setAddModalToggle, saveRef }) => {
  return (
    <div>
      {/* Back button */}
      <div className="bottomNav flex justify-center items-center bottom-4 left-0 fixed w-[100%]">
        <div
          className="w-[71px] h-[71px] mx-3 bg-white rounded-[59px] shadow-xl p-[18px]"
          onClick={() => {
            setAddModalToggle(false);
            setBottomNavToggle(true);
          }}
        >
          <Back />
        </div>

        {/* Save OR Add button */}
        <div
          className="w-[71px] h-[71px] mx-3 bg-white rounded-[59px] shadow-xl p-[18px]"
          onClick={() => {
            saveRef();
          }}
        >
          <Save />
        </div>
      </div>
    </div>
  );
};

export default AddItemNav;
