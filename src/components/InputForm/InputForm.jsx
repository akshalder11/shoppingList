import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const InputForm = () => {
  // State Variables
  const [itemArray, setItemArray] = useState([]);

  // UseForm Variables
  const { register, getValues, handleSubmit, watch } = useForm();
  const watchFields = watch();

  //UseEffects
  useEffect(() => {
    onLoadPage();
  }, []);


  // Custom Hooks

  //On Pageload init
  const onLoadPage = () => {
    if (localStorage.getItem("itemArray")) {
      const buffer = JSON.parse(localStorage.getItem("itemArray"));
      setItemArray(buffer);
    }
  };

  //Set Local Storage
  const setLocalStorage = (val) => {
    localStorage.setItem("itemArray", JSON.stringify(val));
  };

  
  //Add items
  const addItem = () => {
    console.log("From Watch", watchFields);
    console.log("Current values from Input fields", getValues());

    //For updating state immediately
    let buffer = [];
    buffer = [...itemArray, getValues()];
    setItemArray(buffer);
    console.log("State", buffer);
    setLocalStorage(buffer);
  };

  return (
    <div>
      <h1>InputForm</h1>
      <h3>Open Console to check data</h3>
      <input
        type="text"
        placeholder="Type item name"
        {...register("itemName")}
      />
      <input
        type="text"
        placeholder="Input quatity/weight"
        {...register("quantity")}
      />
      <button onClick={handleSubmit(addItem)}>Add</button>
      <div className="itemList">
        {itemArray.map((itemObject, index) => {
          return (
            <div key={index}>
              <h5>Item Name: {itemObject.itemName}</h5>
              <h5>Quantity {itemObject.quantity}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputForm;
