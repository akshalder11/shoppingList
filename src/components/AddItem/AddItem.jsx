import React, { useEffect, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import AddItemNav from "./AddItemNav";

const AddItem = ({ setBottomNavToggle, setAddModalToggle, saveData }) => {
  // State Variables
  const [unitVal, setUnitVal] = useState("");

  //useForm
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      itemImage: "",
      itemPrice: "",
      markAsDone: "N",
      uniqueID: uuid().slice(0, 8),
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

  useEffect(() => {
    // console.log("Watch", watchField);
    setUnitVal(watchField.unit);
  }, [watchField]);

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 w-[100vw] h-[100vh] px-[18px] bg-black/75 backdrop-blur-[8px] overflow-hidden">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="flex w-[100%] h-[100vh] justify-center items-center">
        <div className="w-[100%] h-[437px] bg-white rounded-[15px] p-[26px]">
          <p className="text-neutral-700 text-[40px]  font-prodBold">
            Add Item
          </p>

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
                required: "Please type in the quantity",
              })}
            />
          </div>

          {/* Quantity */}
          <div className="inputField mt-[30px]">
            <p className="text-neutral-700 text-[15px]  font-prodBold ">
              Quantity
            </p>
            <input
              type="text"
              id="itemQuantity"
              name="itemQuantity"
              className="w-[55%] h-10 mt-2 px-4 py-2 bg-white rounded-lg border-2 border-neutral-200 outline-neutral-200 text-neutral-700 text-[14px] justify-start items-center font-prodReg"
              placeholder="Input quantity here"
              {...register("itemQuantity", {
                required: "Please type in the quantity",
              })}
            />
          </div>
          <div className="inputField mt-[30px]">
            <p className="text-neutral-700 text-[15px]  font-prodBold ">Unit</p>

            {/* Unit buttons */}
            <div className="buttonSection mt-2 flex gap-[12px]">
              <input
                type="button"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "kg"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
                value="kg"
                onClick={() => {
                  setValue("unit", "kg");
                }}
              />
              <input
                type="button"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "gm"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
                value="gm"
                onClick={() => {
                  setValue("unit", "gm");
                }}
              />
              <input
                type="button"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "litre"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
                value="litre"
                onClick={() => {
                  setValue("unit", "litre");
                }}
              />
              <input
                type="button"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "ml"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
                value="ml"
                onClick={() => {
                  setValue("unit", "ml");
                }}
              />
              <input
                type="button"
                className={` px-[13px] py-[5px] rounded-[7px] justify-center items-center text-sm font-prodBold ${
                  unitVal === "piece"
                    ? "text-white bg-neutral-700"
                    : "bg-zinc-100 text-neutral-500"
                }`}
                value="piece"
                onClick={() => {
                  setValue("unit", "piece");
                }}
              />
              {/* Hidden input registers */}
              <input
                type="text"
                {...register("unit", {
                  required: "Select any one of the units",
                })}
                hidden
              />
              <input type="text" {...register("itemImage", {})} hidden />
              <input type="text" {...register("itemPrice", {})} hidden />
              <input type="text" {...register("markAsDone", {})} hidden />
              <input type="text" {...register("uniqueID", {})} hidden />
            </div>
          </div>
        </div>
      </div>

      <AddItemNav
        setBottomNavToggle={setBottomNavToggle}
        setAddModalToggle={setAddModalToggle}
        saveRef={handleSubmit(saveData, onError)}
      />
    </div>
  );
};

export default AddItem;
