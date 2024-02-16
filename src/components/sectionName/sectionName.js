import Image from "next/image";
import styles from "@/styles/secondSectionS/flashSales.module.css";

export default function SectionName({ title, subtitle }) {
  return (
    <div className={styles.flashSalesContainer}>
      <div className={styles.imageText}>
        <Image src="/rectangle.svg" alt="Rectangle" width={20} height={40} />
        <h3 style={{ marginLeft: "15px" }}>{title}</h3>
      </div>
      <h1 style={{ fontSize: "36px" }}>{subtitle}</h1>
    </div>
  );
}
