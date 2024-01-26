import styles from "@/components/flashSection/flashSales/arrows/arrow.module.css";
import { useContext } from "react";
import { LeftArrowContext, RightArrowContext } from "../../arrowContext";

export default function LeftArrow() {
  const { shiftLeft, setShiftLeft } = useContext(LeftArrowContext);
  const { shiftRight, setShiftRight } = useContext(RightArrowContext);

  function handleClick() {
    if (shiftLeft > 0) {
      setShiftLeft(shiftLeft - 1);
      setShiftRight(shiftRight - 1);
    }
  }

  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrow}
      onClick={handleClick}
    >
      <circle cx="23" cy="23" r="23" fill="#F5F5F5" className={styles.circle} />
      <path
        d="M22 16L15 23L22 30M15 23H31"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.path}
      />
    </svg>
  );
}
