"use client";

import Image from "next/image";
import styles from "@/components/mainImage/topImage/topImage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { images } from "./imagesArray";
import ContentOfImage from "./contentOfImages";

export default function TopImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.mainDiv}>
        <Image
          src={images[currentImageIndex].pathImage}
          alt={images[currentImageIndex].altImage}
          loading="lazy"
          sizes="100vw"
          fill
          className={styles.image}
        />
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
            <Image
              src="/lineArrow.svg"
              alt="Line Arrow"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className={styles.circle}>
          {images.map((image, index) => (
            <svg
              key={index}
              width={10}
              height={10}
              style={{
                marginRight: index < images.length - 1 ? "5px" : "0",
                fill: index === currentImageIndex ? "red" : "black",
              }}
            >
              <circle cx="5" cy="5" r="5" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
}
