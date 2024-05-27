import React from 'react'
import ItemRemaining from "../SVGs/ItemRemaining";
import ItemCompleted from "../SVGs/ItemCompleted";

const ItemCompletedTag = () => {
  return (
    <div className="itemRemainTag flex gap-1 mt-[30px]">
      <ItemCompleted />
      <div className="text-neutral-700 text-sm font-normal font-prodReg">
        Completed
      </div>
    </div>
  )
}

export default ItemCompletedTag