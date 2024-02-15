import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/mainImageS/mainImage.module.css";

export default function Links() {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="" className={styles.padd}>
          Woman&apos;s Fashion
        </Link>
        <Image src="/arrow.svg" alt="Arrow" width={8} height={13} />
      </div>
      <div>
        <Link href="" className={styles.padd}>
          Men&apos;s Fashion
        </Link>
        <Image src="/arrow.svg" alt="Arrow" width={8} height={13} />
      </div>
      <Link href="">Electronics</Link>
      <Link href="">Home & Lifestyle</Link>
      <Link href="">Medicine</Link>
      <Link href="">Sports & Outdoor</Link>
      <Link href="">Baby&apos;s Toys</Link>
      <Link href="">Groceries & Pets</Link>
      <Link href="">Health & Beauty</Link>
    </nav>
  );
}
