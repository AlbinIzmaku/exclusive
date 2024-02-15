import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/navigationS/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.header}>
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <div>
            <Link href="" className={styles.link}>
              <h1>Exclusive</h1>
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="" className={styles.link}>
              Home
            </Link>
            <Link href="" className={styles.link}>
              Contact
            </Link>
            <Link href="" className={styles.link}>
              About
            </Link>
            <Link href="" className={styles.link}>
              Sign Up
            </Link>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className={styles.input}
            />
            <Image
              src="/search.svg"
              alt="Search Icon"
              width={15}
              height={15}
              className={styles.image}
            />
          </div>
          <div className={styles.heartShop}>
            <Link href="">
              <Image
                src="/heart.svg"
                alt="Heart Icon"
                width={25}
                height={25}
                className={styles.font}
              />
            </Link>
            <Link href="">
              <Image src="/shop.svg" alt="Shop Icon" width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
