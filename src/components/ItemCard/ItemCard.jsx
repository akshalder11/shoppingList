import React, { useState } from "react";
import MarkComplete from "../SVGs/MarkComplete";
import MarkInComplete from "../SVGs/MarkInComplete";
import UpdateItem from "../UpdateItem/UpdateItem";

const ItemCard = ({
  itemImage,
  itemName,
  itemPrice,
  itemQuantity,
  markAsDone,
  unit,
  markAsDoneHook,
  uniqueID,
  updateData,
  setBottomNavToggle,
}) => {
  //State Variables
  const [updateModalToggle, setUpdateModalToggle] = useState(false);

  const openModal = () => {
    setUpdateModalToggle(true);
    setBottomNavToggle(false);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setUpdateModalToggle(false);
    setBottomNavToggle(true)
  };
  
  const updateAndCloseModal = () => {
    setUpdateModalToggle(false);
    setBottomNavToggle(true)
  }

  const sendSaveData = (data) => {
    updateData(data)
    updateAndCloseModal();
  }

  return (
    <div
      className="itemCard flex items-center w-[100%] h-[108px] my-[12px] px-[20px] py-[24px] bg-white rounded-[15px] shadow border border-black/opacity-5"
      onClick={openModal}
    >
      {itemImage !== "" ? (
        <img
          className="w-[60px] h-[60px] rounded-full mr-4"
          src="https://via.placeholder.com/60x60"
        />
      ) : null}

      <div className="itemRightPart flex-auto">
        <div className="itemDetails">
          <div className="itemName text-neutral-700 text-lg font-prodBold">
            {itemName}
          </div>
          <div className="quantity text-neutral-500 font-prodBold text-[10px] mt-1 mr-1.5 px-[9px] py-[5px] bg-zinc-100 rounded-[7px] justify-center items-center gap-2.5 inline-flex">
            {itemQuantity} {unit}
          </div>
          {itemPrice !== "" ? (
            <div className="quantity text-neutral-500 font-prodBold text-[10px] mt-1 px-[9px] py-[5px] bg-zinc-100 rounded-[7px] justify-center items-center gap-2.5 inline-flex">
              ₹ {itemPrice}
            </div>
          ) : null}
        </div>
      </div>

      {markAsDone === "N" ? (
        <button
          onClick={(e) => {
            markAsDoneHook(e, uniqueID);
          }}
        >
          <MarkInComplete />
        </button>
      ) : (
        <button
          onClick={(e) => {
            markAsDoneHook(e, uniqueID);
          }}
        >
          <MarkComplete />
        </button>
      )}
      {updateModalToggle ? (
        <UpdateItem
          closeModal={closeModal}
          sendSaveData={sendSaveData}
          itemImage={itemImage}
          itemName={itemName}
          itemPrice={itemPrice}
          itemQuantity={itemQuantity}
          markAsDone={markAsDone}
          unit={unit}
          uniqueID={uniqueID}
        />
      ) : null}
    </div>
  );
};

export default ItemCard;
