import Image from "next/image";
import styles from "@/styles/flashS/flashCard.module.css";

export default function ImageOfCard() {
  return (
    <Image
      src="/gameController.svg"
      alt="Game Controller"
      width={150}
      height={150}
      className={styles.image}
    />
  );
}
