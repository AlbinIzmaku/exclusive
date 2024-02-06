import Image from "next/image";
import styles from "@/components/bestSelling/bestCards/bestCard/bestCard.module.css";

import Link from "next/link";
import HeartBest from "../svgs/heartBest";
import EyeBest from "../svgs/eyeBest";
import StarsBest from "../svgs/starsBest";

export default function BestCard({
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
        {/* <div className={styles.redBox}>
          <p>{((fPrice - cPrice) / fPrice * 100).toFixed(2)}%</p>
        </div> */}
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
          <HeartBest />
          <EyeBest />
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
          <StarsBest />
          <p style={{ color: "#888" }}>({rating})</p>
        </div>
      </div>
    </div>
  );
}
