
import { cards } from "@/data/cards/dataOfCards";
import Image from "next/image";
import Star from "@/svg/star";
import styles from "@/styles/dynamicProductS/product.module.css";

export default function ProductPage({ params }) {
  const photo = cards.find((card) => card.id === parseInt(params.id));
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.card}>
          <Image
            alt={photo.altOfProduct}
            src={photo.sourceOfProduct}
            width={400}
            height={400}
          />
        </div>
        <div className={styles.content}>
          <div>
            <h3 className={styles.leftText}>Product: </h3>
            <h3>{photo.altOfProduct}</h3>
          </div>
          <div>
            <h3 className={styles.leftText}>Type: </h3>
            <h3>{photo.nameOfProduct}</h3>
          </div>
          <div>
            <h3 className={styles.leftText}>Discount: </h3>
            <h3>{photo.fullPrice - photo.currentPrice}$</h3>
          </div>
          <div>
            <h3 className={styles.leftText}>Current Price: </h3>
            <h3>{photo.currentPrice}$</h3>
          </div>
          <div>
            <h3 className={styles.leftText}>Full Price: </h3>
            <h3>{photo.fullPrice}$</h3>
          </div>
          <div>
            <h3 className={styles.leftText}>Rating:</h3>
            <h3>
              {photo.ratingOfStars} <Star />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
