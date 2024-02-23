'use client'

import { useState } from "react";
import { dataOfBest } from "../../../data/dataOfBest/dataOfBest";
import Card from "@/components/card/card";
import { cards } from "@/data/cards/dataOfCards";
import { useRating } from "@/hooks/useRating";

export default function BestCards() {
  const [initialRating, setInitialRating] = useRating(cards)
  return (
    <section
      style={{
        paddingTop: "50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {dataOfBest.map((card) => {
        return (
          <Card
            key={card.id}
            src={card.sourceOfProduct}
            alt={card.altOfProduct}
            name={card.nameOfProduct}
            cPrice={card.currentPrice}
            fPrice={card.fullPrice}
            rating={initialRating.find(c => c.id === card.id)?.ratingOfStars || card.ratingOfStars}
            onRatingClick={() => setInitialRating(card.id)}
          />
        );
      })}
    </section>
  );
}

const bestStyle = {
  paddingTop: "50px",
  display: "flex",
  justifyContent: "space-between",
};
