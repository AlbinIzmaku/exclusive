"use client";

import { useState } from "react";
import FlashSales from "./flashSales/flashSales";
import FlashSalesCards from "./flashSalesCards/flashSalesCards";
import { LeftArrowContext, RightArrowContext } from "./arrowContext";

export default function FlashSection() {
  const [shiftRight, setShiftRight] = useState(4);
  const [shiftLeft, setShiftLeft] = useState(0);

  const rightContextValue = {
    shiftRight: shiftRight,
    setShiftRight: setShiftRight,
  };


  const leftContextValue = {
    shiftLeft: shiftLeft,
    setShiftLeft: setShiftLeft
  }
  // console.log(shiftRight)

  return (
    <RightArrowContext.Provider value={rightContextValue}>
      <LeftArrowContext.Provider value={leftContextValue}>
        <div>
        <FlashSales />
        <FlashSalesCards />
      </div>
      </LeftArrowContext.Provider>
      
    </RightArrowContext.Provider>
  );
}
