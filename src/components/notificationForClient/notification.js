import Image from "next/image";
import styles from "@/components/notificationForClient/notificationForClient.module.css";

export default function Notification({ src, alt, description, paragraph }) {
  return (
    <div className={styles.notification}>
      <div className={styles.image}>
        <Image src={src} alt={alt} width={81} height={80} />
      </div>
      <h4>{description}</h4>
      <p>{paragraph}</p>
    </div>
  );
}
