import Link from "next/link";
import styles from "@/styles/about/about.module.css";

export default function NotFound() {
  return (
    <main>
      <div className={styles.containerLinks}>
        <div className={styles.links}>
          <Link href="/" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Home
          </Link>
          <span> / </span>
          <Link href="/about">About</Link>
        </div>
      </div>
    </main>
  )
}