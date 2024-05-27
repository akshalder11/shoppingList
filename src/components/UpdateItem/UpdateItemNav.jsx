import React from 'react'
import Back from "../SVGs/Back";
import Save from "../SVGs/Save";

const UpdateItemNav = ({ closeModal, saveRef }) => {
  return (
    <div>
      {/* Back button */}
      <div className="bottomNav flex justify-center items-center bottom-4 left-0 fixed w-[100%]">
        <div
          className="w-[71px] h-[71px] mx-3 bg-white rounded-[59px] shadow-xl p-[18px]"
          onClick={(e) => {
            closeModal(e);
          }}
        >
          <Back />
        </div>

        {/* Save OR Add button */}
        <div className="w-[71px] h-[71px] mx-3 bg-white rounded-[59px] shadow-xl p-[18px]"
        onClick={()=> {
          saveRef();
        }}>
          <Save />
        </div>
      </div>
    </div>
  )
}

export default UpdateItemNav