import Image from "next/image";
import styles from "@/components/musicSection/musicSection.module.css";
import TimeAtMusic from "./timeAtMusic/timeAtMusic";

export default function MusicSection() {
  return (
    <article className={styles.article}>
      <div className={styles.leftDiv}>
        <h4 className={styles.categories}>Categories</h4>
        <h1 className={styles.enhance}>
          Enhance Your <br />
          Music Experience
        </h1>
        <TimeAtMusic />
        <button className={styles.button}>Buy Now!</button>
      </div>
      <div className={styles.rightDiv}>
        <Image src="/music.svg" alt="Music" width={450} height={330} className={styles.music} />
      </div>
    </article>
  );
}
