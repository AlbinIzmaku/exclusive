import Image from "next/image";
import styles from "@/styles/eighthSectionS/information.module.css";

export default function InfoCard({ src, alt, description, paragraph }) {
  return (
    <div className={styles.notification}>
      <div className={styles.image}>
        <Image src={src} alt={alt} width={81} height={80} />
      </div>
      <h4 style={{ margin: "5px 0" }}>{description}</h4>
      <p>{paragraph}</p>
    </div>
  );
}
