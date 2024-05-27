import React from "react";
import ItemRemaining from "../SVGs/ItemRemaining";

const ItemRemainTag = () => {
  return (
    <div className="itemRemainTag flex gap-1 mt-[30px]">
      <ItemRemaining />
      <div className="text-neutral-700 text-sm font-normal font-prodReg">
        Items remaining
      </div>
    </div>
  );
};

export default ItemRemainTag;
