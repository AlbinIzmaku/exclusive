import Image from "next/image";
import styles from '@/components/bestSelling/bestSelling.module.css'
import Best from "./best/best";
import BestCards from "./bestCards/bestCards";

export default function BestSelling() {
  return (
    <article className={styles.article}>
      <Best />
      <BestCards />
    </article>
  )
}