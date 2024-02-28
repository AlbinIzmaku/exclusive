"use client";

import Card from "@/components/card/card";
import { useEffect, useState } from "react";
import styles from "@/styles/wishlist/wishlist.module.css";
import SectionName from "@/components/sectionName/sectionName";

export default function WishList() {
  const [wishList, setWishList] = useState([]);
  const [viewList, setViewList] = useState([]);

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedWishList);
  }, []);

  useEffect(() => {
    const storedViewList = JSON.parse(localStorage.getItem("viewList")) || [];
    setViewList(storedViewList);
  }, []);

  return (
    <main className={styles.main}>
      <h3 style={{ fontWeight: "normal" }}>Wishtlist ({wishList.length})</h3>
      <section className={styles.list}>
        {wishList.map((card) => {
          return (
            <Card
              key={card.id}
              src={card.sourceOfProduct}
              alt={card.altOfProduct}
              name={card.nameOfProduct}
              cPrice={card.currentPrice}
              fPrice={card.fullPrice}
              rating={card.ratingOfStars}
            />
          );
        })}
      </section>
      <SectionName title="Just for you" />
      <section className={styles.list}>
        {viewList.map((card) => {
          return (
            <Card
              key={card.id}
              src={card.sourceOfProduct}
              alt={card.altOfProduct}
              name={card.nameOfProduct}
              cPrice={card.currentPrice}
              fPrice={card.fullPrice}
              rating={card.ratingOfStars}
            />
          );
        })}
      </section>
    </main>
  );
}
