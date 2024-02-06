import Image from "next/image";
import styles from '@/components/bestSelling/best/best.module.css'

export default function Best() {
  return (
    <section className={styles.section}>
      <div className={styles.flashSalesContainer}>
        <div className={styles.imageText}>
          <Image src="/rectangle.svg" alt="Rectangle" width={20} height={40} />
          <h3 style={{ marginLeft: "15px" }}>This Month</h3>
        </div>
        <h1 style={{ fontSize: "36px" }}>Best Selling Products</h1>
      </div>
      <div>
        <button className={styles.buttonStyle}>View All</button>
      </div>
    </section>
  )
}