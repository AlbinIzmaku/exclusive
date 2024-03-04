"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/navigationS/navigation.module.css";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedWishList);
  }, []);

  return (
    <nav className={styles.header}>
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <div>
            <Link href="/" className={styles.link}>
              <h1>Exclusive</h1>
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/authentication" className={styles.link}>
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
            <Link href="/wishlist">
              <Image
                src="/heart.svg"
                alt="Heart Icon"
                width={25}
                height={25}
                className={styles.font}
              />
              {wishList.length > 0 && (
                <div className={styles.wishList}>{wishList.length}</div>
              )}
              
            </Link>
            <Link href="/cart">
              <Image src="/shop.svg" alt="Shop Icon" width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
