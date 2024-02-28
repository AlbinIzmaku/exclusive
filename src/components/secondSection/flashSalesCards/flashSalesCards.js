"use client";

import { cards } from "@/data/cards/dataOfCards";
import { useContext, useEffect, useState } from "react";
import { LeftArrowContext, RightArrowContext } from "@/context/arrowContext";
import styles from "@/styles/secondSectionS/flashSalesCards.module.css";
import Card from "@/components/card/card";
import { useRating } from "@/hooks/useRating";

export default function FlashSalesCards() {
  const { shiftRight } = useContext(RightArrowContext);
  const { shiftLeft } = useContext(LeftArrowContext);
  const [initialRating, setInitialRating] = useRating(cards);
  const [wishList, setWishList] = useState([]);
  const [viewList, setViewList] = useState([])

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedWishList);

    const storedView = JSON.parse(localStorage.getItem('viewList')) || []
    setViewList(storedView)
  }, []);

  function handleAddToWishList(card) {
    const isCardInWishList = wishList.some((item) => item.id === card.id);

    if (!isCardInWishList) {
      const updateWishList = [...wishList, card];

      setWishList(updateWishList);
      localStorage.setItem("wishList", JSON.stringify(updateWishList));
    }
  }

  function handleAddToViewList(card) {
    const isCardInViewList = viewList.some((item) => item.id === card.id);

    if(!isCardInViewList) {
      const updateViewList = [...viewList, card];

      setViewList(updateViewList);
      localStorage.setItem('viewList', JSON.stringify(updateViewList));
    }
  }

  return (
    <section className={styles.section}>
      {cards.slice(shiftLeft, shiftRight).map((card, id) => {
        return (
          <Card
            key={card.id}
            src={card.sourceOfProduct}
            alt={card.altOfProduct}
            name={card.nameOfProduct}
            cPrice={card.currentPrice}
            fPrice={card.fullPrice}
            rating={
              initialRating.find((c) => c.id === card.id)?.ratingOfStars ||
              card.ratingOfStars
            }
            link={`/product/${card.id}`}
            onRatingClick={() => setInitialRating(card.id)}
            onAddToWishList={() => handleAddToWishList(card)}
            onAddToViewList={() => handleAddToViewList(card)}
          />
        );
      })}
    </section>
  );
}
