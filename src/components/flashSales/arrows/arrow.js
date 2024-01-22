import styles from "@/components/flashSales/arrows/arrow.module.css";

export default function Arrows() {
  return (
    <>
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrow}
      >
        <circle
          cx="23"
          cy="23"
          r="23"
          fill="#F5F5F5"
          className={styles.circle}
        />
        <path
          d="M22 16L15 23L22 30M15 23H31"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.path}
        />
      </svg>
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="23"
          cy="23"
          r="23"
          fill="#F5F5F5"
          className={styles.circle}
        />
        <path
          d="M14.5 23H31M31 23L24 16M31 23L24 30"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.path}
        />
      </svg>
    </>
  );
}
