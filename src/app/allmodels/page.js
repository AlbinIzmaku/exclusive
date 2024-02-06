import { cards } from "@/components/flashSection/flashSalesCards/flashCard/dataOfCards/dataOfCards";
import FlashCard from "@/components/flashSection/flashSalesCards/flashCard/flashCard";
import styles from '@/app/allmodels/allModels.module.css'
export default function AllModels() {
  
  return (
    <div className={styles.allModels}>
      {
        cards.map((card) => {
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
          )
        })
      }
    </div>
  )
}
