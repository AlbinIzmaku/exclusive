"use client";

import Card from "@/components/card/card";
import { cards } from "@/data/cards/dataOfCards";
import styles from "@/app/allProducts/products.module.css";
import { useRating } from "@/hooks/useRating";

export default function AllProducts() {
  const [initialRating, setInitialRating] = useRating(cards);
  return (
    <div className={styles.mainDiv}>
      {cards.map((card) => {
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
    </div>
  );
}
