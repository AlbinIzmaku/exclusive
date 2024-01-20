import Link from "next/link";
import styles from '@/components/mainImage/mainImage.module.css'
import { images } from "./imagesArray";
import Image from "next/image";

export default function ContentOfImage({currentImageIndex}) {
  return (
    <div className={styles.text}>
      <div className={styles.imgText}>
        <p>{images[currentImageIndex].description}</p>
      </div>
      <h1 style={{ fontSize: "48px", margin: "20px 0" }}>
        Up to 10% <br /> off Voucher
      </h1>
      <div className={styles.linkImage}>
        <Link
          href=""
          style={{
            marginRight: "10px",
            textDecoration: "none",
            color: "#000",
          }}
        >
          Shop Now
        </Link>
        <Image src="/lineArrow.svg" alt="Line Arrow" width={20} height={20} />
      </div>
    </div>
  );
}
