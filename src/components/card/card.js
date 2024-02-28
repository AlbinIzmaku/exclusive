"use client";
import Image from "next/image";
import Link from "next/link";
import Heart from "@/svg/heart";
import Eye from "@/svg/eye";
import styles from "@/styles/secondSectionS/flashCard.module.css";
import Star from "@/svg/star";

export default function Card({
  src,
  alt,
  name,
  cPrice,
  fPrice,
  rating,
  link,
  onRatingClick,
  onAddToWishList,
  onAddToViewList
}) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.card}>
        <div className={styles.redBox}>
          <p>{(((fPrice - cPrice) / fPrice) * 100).toFixed(2)}%</p>
        </div>
        {link ? (
          <Link href={link}>
            <Image
              src={src}
              alt={alt}
              width={150}
              height={150}
              className={styles.image}
              priority
            />
          </Link>
        ) : (
          <>
            <Image
              src={src}
              alt={alt}
              width={150}
              height={150}
              className={styles.image}
              priority
            />
          </>
        )}
        <div className={styles.heartEye}>
          <Heart onAddToWishList={onAddToWishList} />
          <Eye onAddToViewList={onAddToViewList} />
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
        <div className={styles.star} >
          <Star onRatingClick={onRatingClick} />
          <p style={{ color: "#888" }}>({rating})</p>
        </div>
      </div>
    </div>
  );
}
