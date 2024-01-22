import Image from "next/image";
import styles from "@/components/flashSalesCards/flashCard/flashCard.module.css";
import Heart from "./componentsOfCard/heart";
import Eye from "./componentsOfCard/eye";
import Star from "./componentsOfCard/star";

export default function FlashCard() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.card}>
        <div className={styles.redBox}>
          <p>- 40%</p>
        </div>
        <Image
          src="/gameController.svg"
          alt="Game Controller"
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
        <h4>Havit HV-G-92 Gamepad</h4>
        <div className={styles.price}>
          <p style={{ color: "#db4444" }}>$120</p>
          <p>
            <del style={{ color: "#888" }}>$160</del>
          </p>
        </div>
        <div className={styles.star}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <p style={{ color: "#888" }}>(88)</p>
        </div>
      </div>
    </div>
  );
}
