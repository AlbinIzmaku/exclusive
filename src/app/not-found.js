import Link from "next/link";
import styles from "@/styles/not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <div className={styles.containerLinks}>
        <div className={styles.links}>
          <Link href="/" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Home
          </Link>
          <span> / </span>
          <Link href="/not-found">404 Error</Link>
        </div>
      </div>
      <section className={styles.notFound}>
        <h1 style={{ fontSize: "110px" }}>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button className={styles.button}>
          <Link href="/">Back to home page</Link>
        </button>
      </section>
    </main>
  );
}
