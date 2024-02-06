import styles from "@/components/flashSection/allProducts/allProducts.module.css";
import Link from "next/link";

export default function AllProducts() {
  return (
    <section className={styles.section}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          href="/allmodels"
          style={{
            textDecoration: "none",
          }}
        >
          <button className={styles.buttonStyle}>View All Products</button>
        </Link>
      </div>
    </section>
  );
}
