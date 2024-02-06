import Image from "next/image";
import styles from "@/components/categories/browseByCategory/browseByCategroy.module.css";
import LeftArrowCategory from "./arrowsOfCategory/leftArrowCategory";
import RightArrowCategory from "./arrowsOfCategory/rightArrowCategory";
import ArrowOfCategory from "./arrowsOfCategory/arrowOfCategory";

export default function BrowseByCategory() {
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
        <ArrowOfCategory />
      </div>
    </section>
  );
}
