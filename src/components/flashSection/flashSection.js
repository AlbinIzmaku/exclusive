"use client";

// const { default: AllProducts } = require("./allProducts/allProducts");

import { useState } from "react";
import FlashSales from "./flashSales/flashSales";
import FlashSalesCards from "./flashSalesCards/flashSalesCards";
import { LeftArrowContext, RightArrowContext } from "./arrowContext";
import AllProducts from "./allProducts/allProducts";

export default function FlashSection() {
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
        <div>
          <FlashSales />
          <FlashSalesCards />
          <AllProducts />
        </div>
      </LeftArrowContext.Provider>
    </RightArrowContext.Provider>
  );
}
