import React, { useEffect, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import UpdateItemNav from "./UpdateItemNav";

const UpdateItem = ({
  closeModal,
  sendSaveData,
  itemImage,
  itemName,
  itemPrice,
  itemQuantity,
  markAsDone,
  unit,
  uniqueID,
}) => {
  // State Variables
  const [unitVal, setUnitVal] = useState("");

  //useForm
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      itemImage: itemImage,
      itemName: itemName,
      itemPrice: itemPrice,
      itemQuantity: itemQuantity,
      markAsDone: markAsDone,
      unit: unit,
      uniqueID: uniqueID,
    },
  });
  const watchField = watch();

  //Display errors on console
  const onError = (errors) => {
    console.log("Errors", errors);
    if (errors.itemName) toast.error("Item name cannot be blank");
    if (errors.itemQuantity) toast.error("Quantity cannot be blank");
    if (errors.unit)
      toast.error("Select any one of the unit from the bottom option");
  };

  // console.log(itemImage);
  // console.log(itemName);
  // console.log(itemPrice);
  // console.log(itemQuantity);
  // console.log(markAsDone);
  // console.log(unit);
  // console.log(uniqueID);

  useEffect(() => {
    onLoadPage();
  }, [watchField?.unit]);

  const onLoadPage = () => {
    // setValue("itemImage",itemImage)
    // setValue("itemName",itemName)
    // setValue("itemPrice",itemPrice)
    // setValue("itemQuantity",itemQuantity)
    // setValue("markAsDone",markAsDone)
    // setValue("unit",unit)
    // setValue("uniqueID",uniqueID)
    setUnitVal(watchField?.unit);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 w-[100vw] h-[100vh] px-[18px] bg-black/75 backdrop-blur-[8px] overflow-hidden">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="flex w-[100%] h-[100vh] justify-center items-center">
        <div className="w-[100%] h-[511px] bg-white rounded-[15px] p-[26px]">
          <p className="text-neutral-700 text-[40px]  font-prodBold">
            Modify Item
          </p>

          <div className="flex mt-[30px]">
            <img
              className="w-[60px] h-[60px] rounded-full mr-4"
              src="https://via.placeholder.com/60x60"
            />
            <div className="itemDetails">
              <div className="itemName text-neutral-700 text-lg font-prodBold">
                {itemName}
              </div>
              <div className="quantity text-neutral-500 font-prodBold text-[10px] mt-1 mr-1.5 px-[9px] py-[5px] bg-zinc-100 rounded-[7px] justify-center items-center gap-2.5 inline-flex">
                {itemQuantity} {unit}
              </div>
              <div className="quantity text-neutral-500 font-prodBold text-[10px] mt-1 px-[9px] py-[5px] bg-zinc-100 rounded-[7px] justify-center items-center gap-2.5 inline-flex">
                ₹ {itemPrice}
              </div>
            </div>
          </div>

          {/* Item name */}
          <div className="inputField mt-[30px]">
            <p className="text-neutral-700 text-[15px] font-prodBold ">
              Item name
            </p>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="w-[100%] h-10 mt-2 px-4 py-2 bg-white rounded-lg border-2 border-neutral-200 outline-neutral-200 text-neutral-700 text-[14px] justify-start items-center font-prodReg"
              placeholder="Input item name here"
              {...register("itemName", {
                required: "Please type in the itemName",
              })}
            />
          </div>

          {/* Quantity */}
          <div className="flex">
            <div className="inputField mt-[30px]">
              <p className="text-neutral-700 text-[15px]  font-prodBold ">
                Quantity
              </p>
              <input
                type="text"
                id="itemQuantity"
                name="itemQuantity"
                className="w-[90%] h-10 mt-2 px-4 py-2 bg-white rounded-lg border-2 border-neutral-200 outline-neutral-200 text-neutral-700 text-[14px] justify-start items-center font-prodReg"
                placeholder="Input quantity here"
                {...register("itemQuantity", {
                  required: "Please type in the itemQuantity",
                })}
              />
            </div>
            <div className="inputField mt-[30px]">
              <p className="text-neutral-700 text-[15px]  font-prodBold ">
                Price
              </p>
              <input
                type="text"
                id="itemPrice"
                name="itemPrice"
                className="w-[90%] h-10 mt-2 px-4 py-2 bg-white rounded-lg border-2 border-neutral-200 outline-neutral-200 text-neutral-700 text-[14px] justify-start items-center font-prodReg"
                placeholder="Input price here"
                {...register("itemPrice", {})}
              />
            </div>
          </div>
          <div className="inputField mt-[30px]">
            <p className="text-neutral-700 text-[15px]  font-prodBold ">Unit</p>

            {/* Unit buttons */}
            <div className="buttonSection mt-2 flex gap-[12px]">
              <label
                htmlFor="kg"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "kg"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
              >
                kg
                <input
                  id="kg"
                  type="radio"
                  value="kg"
                  {...register("unit")}
                  hidden
                />
              </label>
              <label
                htmlFor="gm"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "gm"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
              >
                <input
                  id="gm"
                  type="radio"
                  value="gm"
                  {...register("unit")}
                  hidden
                />
                gm
              </label>
              <label
                htmlFor="litre"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "litre"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
              >
                <input
                  id="litre"
                  type="radio"
                  value="litre"
                  {...register("unit")}
                  hidden
                />
                litre
              </label>
              <label
                htmlFor="ml"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "ml"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
              >
                <input
                  id="ml"
                  type="radio"
                  value="ml"
                  {...register("unit")}
                  hidden
                />
                ml
              </label>
              <label
                htmlFor="piece"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "piece"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
              >
                <input
                  id="piece"
                  type="radio"
                  value="piece"
                  {...register("unit")}
                  hidden
                />
                piece
              </label>
              {/* Hidden input registers */}
              {/* <input
                type="text"
                {...register("unit", {
                  required: "Select any one of the units",
                })}
                hidden
              /> */}
              {/* <input type="text" {...register("itemImage", {})} hidden /> */}
              {/* <input type="text" {...register("itemPrice", {})} hidden /> */}
              {/* <input type="text" {...register("markAsDone", {})} hidden /> */}
              {/* <input type="text" {...register("uniqueID", {})} hidden /> */}
            </div>
          </div>
        </div>
      </div>

      <UpdateItemNav
        closeModal={closeModal}
        saveRef={handleSubmit(sendSaveData, onError)}
      />

      {/* <AddItemNav
        setModalToggle={setModalToggle}
        saveRef={handleSubmit(saveData, onError)}
      /> */}
    </div>
  );
};

export default UpdateItem;
