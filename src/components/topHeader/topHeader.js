import Link from "next/link";
import styles from "@/components/topHeader/topHeader.module.css";

export default function TopHeader() {
  return (
    <section className={styles.topHeader}>
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - Off 50%!
          </p>
          <Link href="" className={styles.link}>
            Shop Now
          </Link>
        </div>
        <div>
          <select className={styles.select}>
            <option>English</option>
          </select>
        </div>
      </div>
    </section>
  );
}
