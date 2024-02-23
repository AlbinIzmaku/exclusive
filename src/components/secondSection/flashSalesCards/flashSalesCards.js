"use client";

import { cards } from "@/data/cards/dataOfCards";
import { useContext } from "react";
import { LeftArrowContext, RightArrowContext } from "@/context/arrowContext";
import styles from "@/styles/secondSectionS/flashSalesCards.module.css";
import Card from "@/components/card/card";
import { useRating } from "@/hooks/useRating";

export default function FlashSalesCards() {
  const { shiftRight } = useContext(RightArrowContext);
  const { shiftLeft } = useContext(LeftArrowContext);

  const [initialRating, setInitialRating] = useRating(cards);

  return (
    <section className={styles.section}>
      {cards.slice(shiftLeft, shiftRight).map((card, id) => {
        return (
          <Card
            key={card.id}
            src={card.sourceOfProduct}
            alt={card.altOfProduct}
            name={card.nameOfProduct}
            cPrice={card.currentPrice}
            fPrice={card.fullPrice}
            rating={
              initialRating.find((c) => c.id === card.id)?.ratingOfStars ||
              card.ratingOfStars
            }
            link={`/product/${card.id}`}
            onRatingClick={() => setInitialRating(card.id)}
          />
        );
      })}
    </section>
  );
}
