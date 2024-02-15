import LeftArrow from "@/svg/leftArrow";
import RightArrow from "@/svg/rightArrow";
import { useContext } from "react";
import {
  LeftArrowContext,
  RightArrowContext,
} from "../../../../context/arrowContext";
import { cards } from "../../../../data/cards/dataOfCards";

export default function Arrows() {
  const { shiftLeft, setShiftLeft } = useContext(LeftArrowContext);
  const { shiftRight, setShiftRight } = useContext(RightArrowContext);

  function handleLeftClick() {
    if (shiftLeft > 0) {
      setShiftLeft(shiftLeft - 1);
      setShiftRight(shiftRight - 1);
    }
  }

  function handleRightClick() {
    if (shiftRight < cards.length) {
      setShiftRight(shiftRight + 1);
      setShiftLeft(shiftLeft + 1);
    }
  }

  return (
    <>
      <LeftArrow handleLeftClick={handleLeftClick} />
      <RightArrow handleRightClick={handleRightClick} />
    </>
  );
}
