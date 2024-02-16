"use client";

import { useState } from "react";
import FlashSales from "./flashSales/flashSales";
import FlashSalesCards from "./flashSalesCards/flashSalesCards";
import {
  LeftArrowContext,
  RightArrowContext,
} from "../../context/arrowContext";
import AllProducts from "../button";

export default function SecondSection() {
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
          <div
            style={{
              borderBottom: "2px solid #a29494fe",
              width: "80%",
              margin: "auto",
            }}
          ></div>
        </div>
      </LeftArrowContext.Provider>
    </RightArrowContext.Provider>
  );
}
