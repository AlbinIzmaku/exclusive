"use client";

import { cards } from "@/data/cards/dataOfCards";
import { useContext } from "react";
import { LeftArrowContext, RightArrowContext } from "@/context/arrowContext";
import Link from "next/link";
import styles from "@/styles/secondSectionS/flashSalesCards.module.css";
import Card from "@/components/card/card";

export default function FlashSalesCards() {
  const { shiftRight } = useContext(RightArrowContext);
  const { shiftLeft } = useContext(LeftArrowContext);

  return (
    <section className={styles.section}>
      {cards.slice(shiftLeft, shiftRight).map((card, id) => {
        return (
          // <Link key={id} href={`/imageRoutes/${card.id}`}>
          <Card
            key={card.id}
            src={card.sourceOfProduct}
            alt={card.altOfProduct}
            name={card.nameOfProduct}
            cPrice={card.currentPrice}
            fPrice={card.fullPrice}
            rating={card.ratingOfStars}
            // id={id}
          />
          // </Link>
        );
      })}
    </section>
  );
}
