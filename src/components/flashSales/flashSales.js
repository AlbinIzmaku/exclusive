import styles from "@/components/flashSales/flashSales.module.css";
import Image from "next/image";
import Time from "./time/time";
import Arrows from "./arrows/arrow";

export default function FlashSales() {
  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <div className={styles.flashSalesContainer}>
          <div className={styles.imageText}>
            <Image
              src="/rectangle.svg"
              alt="Rectangle"
              width={20}
              height={40}
            />
            <h3 style={{ marginLeft: "15px" }}>Today&apos;s</h3>
          </div>
          <h1 style={{ fontSize: "36px" }}>Flash Sales</h1>
        </div>
        <Time />
      </section>
      <div>
        <Arrows className={styles.arrows} />
      </div>
    </article>
  );
}
