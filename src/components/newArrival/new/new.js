import Image from "next/image";
import styles from '@/components/categories/browseByCategory/browseByCategroy.module.css'

export default function New() {
  return (
    <section className={styles.section}>
      <div className={styles.flashSalesContainer}>
        <div className={styles.imageText}>
          <Image src="/rectangle.svg" alt="Rectangle" width={20} height={40} />
          <h3 style={{ marginLeft: "15px" }}>Categories</h3>
        </div>
        <h1 style={{ fontSize: "36px" }}>Browse By Category</h1>
      </div>
    </section>
  )
}