import { cards } from "@/data/cards/dataOfCards";
// import FlashCard from "@/components/secondSectionS/flashSalesCards/flashCard/flashCard";
import styles from "@/app/allmodels/allModels.module.css";
import Card from "@/components/card/card";
export default function AllModels() {
  return (
    <div className={styles.allModels}>
      {cards.map((card) => {
        return (
          <Card
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
    </div>
  );
}
