import Link from "next/link";
import styles from "@/styles/button.module.css";

export default function Button() {
  return (
    <section className={styles.section}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          href="/allProducts"
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
