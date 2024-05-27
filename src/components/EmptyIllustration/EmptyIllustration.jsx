import React from 'react'
import Empty from '../SVGs/Empty'

const EmptyIllustration = () => {
  return (
    <div className="flex flex-col items-center pt-[60px] mb-[40px]">
          <Empty/>
          <div className="text-center text-neutral-500 text-[17px] font-prodReg mt-[26px]">No items present.<br/>Start adding some!</div>
        </div>
  )
}

export default EmptyIllustration