import styles from "@/components/bestSelling/bestCards/bestCards.module.css";
import { dataOfBest } from "./dataOfBest/dataOfBest";
import BestCard from "./bestCard/bestCard";

export default function BestCards() {
  return (
    <section className={styles.section}>
      {dataOfBest.map((card) => {
        return (
          <BestCard
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
