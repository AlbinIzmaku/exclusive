import Image from "next/image";
import Link from "next/link";
import Heart from "@/svg/heart";
import Eye from "@/svg/eye";
import Stars from "@/svg/stars";
import styles from "@/styles/flashS/flashCard.module.css";

export default function FlashCard({
  src,
  alt,
  name,
  cPrice,
  fPrice,
  rating,
  id,
}) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.card}>
        <div className={styles.redBox}>
          <p>{(((fPrice - cPrice) / fPrice) * 100).toFixed(2)}%</p>
        </div>
        <Link key={id} href={`/imageRoutes/${id}`}>
          <Image
            src={src}
            alt={alt}
            width={150}
            height={150}
            className={styles.image}
            priority
          />
        </Link>
        <div className={styles.heartEye}>
          <Heart />
          <Eye />
        </div>
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <div className={styles.price}>
          <p style={{ color: "#db4444" }}>${cPrice}</p>
          <p>
            <del style={{ color: "#888" }}>${fPrice}</del>
          </p>
        </div>
        <div className={styles.star}>
          <Stars />
          <p style={{ color: "#888" }}>({rating})</p>
        </div>
      </div>
    </div>
  );
}
