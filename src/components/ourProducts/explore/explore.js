import Image from "next/image";
import styles from "@/components/ourProducts/explore/explore.module.css";
import ArrowOfExplore from "./arrwosOfExplore/arrowofExplore";

export default function Explore() {
  return (
    <section className={styles.section}>
      <div className={styles.flashSalesContainer}>
        <div className={styles.imageText}>
          <Image src="/rectangle.svg" alt="Rectangle" width={20} height={40} />
          <h3 style={{ marginLeft: "15px" }}>Categories</h3>
        </div>
        <h1 style={{ fontSize: "36px" }}>Browse By Category</h1>
      </div>
      <div>
        <ArrowOfExplore />
      </div>
    </section>
  );
}
