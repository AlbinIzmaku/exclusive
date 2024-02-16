import Image from "next/image";
import Time from "./time/time";
import styles from "@/styles/secondSectionS/flashSales.module.css";
import SectionName from "@/components/sectionName/sectionName";
import ArrowsFlash from "./arrowsFlash/arrows";

export default function FlashSales() {
  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <SectionName title="Today's" subtitle="Flash Sales" />
        <Time />
      </section>
      <div>
        <ArrowsFlash className={styles.arrows} />
      </div>
    </article>
  );
}
 