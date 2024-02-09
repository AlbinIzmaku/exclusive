import styles from "@/components/ourProducts/cardsOfProducts/cardsOfProducts.module.css";
import CardOfProducts from "./cardOfProducts/cardOfProducts";
import { dataOfProducts } from "./dataOfProducts/dataOfProducts";

export default function CardsOfProducts() {
  return (
    <section className={styles.section}>
      {dataOfProducts.map((card) => {
        return (
          <CardOfProducts 
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
