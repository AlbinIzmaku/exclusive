"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/data/topImageD/imagesArray";
import ContentOfImage from "./contentOfImages";
import styles from "@/styles/firstSectionS/mainImage.module.css";

export default function ImageSlider() {
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
        <ContentOfImage currentImageIndex={currentImageIndex} />
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
