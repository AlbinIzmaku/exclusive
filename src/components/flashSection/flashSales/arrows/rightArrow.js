"use client";

import styles from "@/components/flashSection/flashSales/arrows/arrow.module.css";
import { useContext } from "react";
import { LeftArrowContext, RightArrowContext } from "../../arrowContext";
import { cards } from "../../flashSalesCards/flashCard/dataOfCards/dataOfCards";

export default function RightArow() {
  const { shiftRight, setShiftRight } = useContext(RightArrowContext);
  const { shiftLeft, setShiftLeft } = useContext(LeftArrowContext);

  function handleClick() {
    if (shiftRight < cards.length) {
      setShiftRight(shiftRight + 1);
      setShiftLeft(shiftLeft + 1);
    }
  }

  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <circle cx="23" cy="23" r="23" fill="#F5F5F5" className={styles.circle} />
      <path
        d="M14.5 23H31M31 23L24 16M31 23L24 30"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.path}
      />
    </svg>
  );
}
