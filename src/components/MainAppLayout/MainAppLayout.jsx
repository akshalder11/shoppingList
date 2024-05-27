import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ListHead from "../ListHead/ListHead";
import ItemRemainTag from "../ItemRemainTag/ItemRemainTag";
import ItemCard from "../ItemCard/ItemCard";
import ItemCompletedTag from "../ItemCompleted/ItemCompleted";
import BottomNav from "../BottomNav/BottomNav";
import AddItem from "../AddItem/AddItem";
import EmptyIllustration from "../EmptyIllustration/EmptyIllustration";

const MainAppLayout = () => {
  //State Variables
  const [addModalToggle, setAddModalToggle] = useState(false);
  const [bottomNavToggle, setBottomNavToggle] = useState(true);
  const [itemArray, setItemArray] = useState([]);

  //UseEffects
  useEffect(() => {
    onLoadPage();
  }, []);

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

  //Save form data
  const saveData = (data) => {
    console.log("Data will be saved.", data);
    let buffer = [];

    buffer = [...itemArray, data];
    setItemArray(buffer);
    setLocalStorage(buffer);
    setAddModalToggle(false);
    toast.success("Item Added successfully");
  };

  //Update data
  const updateData = (data) => {
    console.log("Data will be updated", data);
    let buffer = [];
    buffer = [...itemArray];

    const updateArray = buffer.map((item) => {
      if (item.uniqueID === data.uniqueID) {
        return {
          ...item,
          itemName: data.itemName,
          itemQuantity: data.itemQuantity,
          itemPrice: data.itemPrice,
          unit: data.unit,
        };
      }
      return { ...item };
    });
    console.log("After updating", updateArray);
    setItemArray(updateArray);
    setLocalStorage(updateArray);
    toast.success("Item status updated successfully");
  };

  // Open addItemModal
  const addItemToggle = (val) => {
    console.log("Passing addItemToggle from child to parent", val);
    setAddModalToggle(val);
    setBottomNavToggle(false);
  };

  //Mark As Done
  const markAsDoneHook = (e, uniqueID) => {
    e.stopPropagation();
    let buffer = [];
    buffer = [...itemArray];

    const doneArray = buffer.map((item) => {
      if (item.uniqueID === uniqueID) {
        if (item.markAsDone === "N") {
          return { ...item, markAsDone: "Y" };
        } else {
          return { ...item, markAsDone: "N" };
        }
      } else return { ...item };
    });

    setItemArray(doneArray);
    setLocalStorage(doneArray);
    toast.success("Item status updated successfully");
  };

  //Filters
  const filterItemsRemaining = () => {
    return itemArray.filter((item) => item.markAsDone === "N");
  };

  const filterItemsCompleted = () => {
    return itemArray.filter((item) => item.markAsDone === "Y");
  };
  const itemsRemaining = filterItemsRemaining();
  const itemsCompleted = filterItemsCompleted();
  // console.log(itemsRemaining)
  // console.log(itemsCompleted)

  //Other variables initialization
  const totalItems = itemArray.length;
  const completedTask = itemsCompleted.length;
  const progressPercent = (completedTask / totalItems) * 100;

  // console.log(totalItems)
  // console.log(completedTask)
  // console.log(progressPercent)

  return (
    <div className="screenBase px-[18px] pt-[48px] pb-[96px]  ">
      <Toaster position="top-center" reverseOrder={true} />
      <ListHead
        totalItems={totalItems}
        completedTask={completedTask}
        progressPercent={progressPercent}
      />
      <ItemRemainTag />

      {itemsRemaining.length > 0 ? (
        itemsRemaining.map(
          ({
            itemImage,
            itemName,
            itemPrice,
            itemQuantity,
            markAsDone,
            unit,
            uniqueID,
          } = item) => {
            return (
              <ItemCard
                itemImage={itemImage}
                itemName={itemName}
                itemPrice={itemPrice}
                itemQuantity={itemQuantity}
                markAsDone={markAsDone}
                unit={unit}
                markAsDoneHook={markAsDoneHook}
                uniqueID={uniqueID}
                key={uniqueID}
                updateData={updateData}
                setBottomNavToggle={setBottomNavToggle}
              />
            );
          }
        )
      ) : (
        <EmptyIllustration />
      )}

      <ItemCompletedTag />
      {itemsCompleted.length > 0 ? (
        itemsCompleted.map(
          ({
            itemImage,
            itemName,
            itemPrice,
            itemQuantity,
            markAsDone,
            unit,
            uniqueID,
          } = item) => {
            return (
              <ItemCard
                itemImage={itemImage}
                itemName={itemName}
                itemPrice={itemPrice}
                itemQuantity={itemQuantity}
                markAsDone={markAsDone}
                unit={unit}
                markAsDoneHook={markAsDoneHook}
                uniqueID={uniqueID}
                key={uniqueID}
                updateData={updateData}
                setBottomNavToggle={setBottomNavToggle}
              />
            );
          }
        )
      ) : (
        <EmptyIllustration />
      )}

      {bottomNavToggle ? (
        <BottomNav
          addItemToggle={addItemToggle}
          setItemArray={setItemArray}
          setLocalStorage={setLocalStorage}
        />
      ) : null}

      {/*Add Modal Handle */}
      {addModalToggle ? (
        <AddItem
          setBottomNavToggle={setBottomNavToggle}
          saveData={saveData}
          setAddModalToggle={setAddModalToggle}
          onClick={() => {
            setAddModalToggle(true);
          }}
        />
      ) : null}
    </div>
  );
};

export default MainAppLayout;
