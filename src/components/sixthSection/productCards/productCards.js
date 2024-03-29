"use client";

import { useRating } from "@/hooks/useRating";
import { dataOfProducts } from "../../../data/dataOfProducts/dataOfProducts";
import Card from "@/components/card/card";

export default function ProductCards() {
  const [initialRating, setInitialRating] = useRating(dataOfProducts);
  return (
    <section style={cardsStyle}>
      {dataOfProducts.map((card) => {
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
            onRatingClick={() => setInitialRating(card.id)}
          />
        );
      })}
    </section>
  );
}

const cardsStyle = {
  paddingTop: "50px",
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
  rowGap: "50px",
  justifyContent: "space-between",
};
