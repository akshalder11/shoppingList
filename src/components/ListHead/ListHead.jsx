import React, { useEffect, useState } from "react";

const ListHead = ({ totalItems, completedTask, progressPercent }) => {
  return (
    <div>
      <div className="text-neutral-700 text-xl font-prodBold">
        Today’s list contains
      </div>
      <div className="flex justify-between items-end">
        <div className="text-neutral-700 text-[54px] font-prodBold mt-[-8px]">
          {totalItems} Items
        </div>
        <div className="text-[#00C37D] text-xl font-prodBold mb-[14px]">
          {completedTask}/{totalItems}
        </div>
      </div>
      <div className="w-[100%] h-[7px] mt-[-7px] relative">
        <div className="w-[100%] h-[6px] left-0 top-0 absolute bg-zinc-100 rounded-xl" />
        <div
          className="h-[6px] left-0 top-0 absolute bg-[#00C37D] rounded-xl"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default ListHead;
