"use client";

import AllProducts from "@/components/flashSection/allProducts/allProducts";
import { LeftArrowContext, RightArrowContext } from "@/context/arrowContext";
import FlashSales from "@/components/flashSection/flashSales/flashSales";
import FlashSalesCards from "@/components/flashSection/flashSalesCards/flashSalesCards";
import { useState } from "react";

export default function FlashSectionRoute() {
  const [shiftRight, setShiftRight] = useState(4);
  const [shiftLeft, setShiftLeft] = useState(0);

  const rightContextValue = {
    shiftRight: shiftRight,
    setShiftRight: setShiftRight,
  };

  const leftContextValue = {
    shiftLeft: shiftLeft,
    setShiftLeft: setShiftLeft,
  };
  // console.log(shiftRight)

  return (
    <RightArrowContext.Provider value={rightContextValue}>
      <LeftArrowContext.Provider value={leftContextValue}>
        {/* <div> */}
        <FlashSales />
        <FlashSalesCards />
        <AllProducts />
        {/* </div> */}
      </LeftArrowContext.Provider>
    </RightArrowContext.Provider>
  );
}
