import Star from "./star";

export default function Stars({onRatingClick }) {
  return (
    <>
      <Star onRatingClick={onRatingClick } />
      <Star onRatingClick={onRatingClick } />
      <Star onRatingClick={onRatingClick } />
      <Star onRatingClick={onRatingClick } />
      <Star onRatingClick={onRatingClick } />
    </>
  );
}
