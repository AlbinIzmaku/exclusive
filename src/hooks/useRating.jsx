import { useState } from "react";

export function useRating(initialRating) {
  const [rating, setRating] = useState(initialRating)

  function handleUpdateRating(id) {
    setRating(
      prevRating => {
        return prevRating.map((card => {
          if(card.id === id) {
            return {
              ...card,
              ratingOfStars: card.ratingOfStars + 1
            }
          }
          return card;
        }))
      }
    )
  }

  return [rating, handleUpdateRating]
}