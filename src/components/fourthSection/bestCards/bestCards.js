import { dataOfBest } from "../../../data/dataOfBest/dataOfBest";
import Card from "@/components/card/card";
// import styles from "@/components/bestSelling/bestCards/bestCards.module.css";

export default function BestCards() {
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
            rating={card.ratingOfStars}
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
