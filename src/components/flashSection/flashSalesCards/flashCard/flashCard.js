import Image from "next/image";
import styles from "@/components/flashSection/flashSalesCards/flashCard/flashCard.module.css";
import Heart from "./componentsOfCard/heart";
import Eye from "./componentsOfCard/eye";
import Stars from "./componentsOfCard/stars";

export default function FlashCard({ src, alt, name, cPrice, fPrice, rating }) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.card}>
        <div className={styles.redBox}>
          <p>- 40%</p>
        </div>
        <Image
          src={src}
          alt={alt}
          width={150}
          height={150}
          className={styles.image}
        />
        <div className={styles.heartEye}>
          <Heart />
          <Eye />
        </div>
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <div className={styles.price}>
          <p style={{ color: "#db4444" }}>${cPrice}</p>
          <p>
            <del style={{ color: "#888" }}>${fPrice}</del>
          </p>
        </div>
        <div className={styles.star}>
          <Stars />
          <p style={{ color: "#888" }}>({rating})</p>
        </div>
      </div>
    </div>
  );
}
