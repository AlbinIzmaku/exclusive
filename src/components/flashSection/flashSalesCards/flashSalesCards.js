"use client";

import styles from "@/components/flashSection/flashSalesCards/flashSalesCards.module.css";
import FlashCard from "./flashCard/flashCard";
import { cards } from "./flashCard/dataOfCards/dataOfCards";
import { useContext } from "react";
import { LeftArrowContext, RightArrowContext } from "../arrowContext";

export default function FlashSalesCards() {
  const { shiftRight } = useContext(RightArrowContext);
  const { shiftLeft } = useContext(LeftArrowContext);


  
  return (
    <section className={styles.section}>
      {cards.slice(shiftLeft, shiftRight).map((card) => {
        return (
          <FlashCard
            key={card.id}
            src={card.sourceOfProduct}
            alt={card.altOfProduct}
            name={card.nameOfProduct}
            cPrice={card.currentPrice}
            fPrice={card.fullPrice}
            rating={card.ratingOfStars}
          />
        );
      })}
    </section>
  );
}
