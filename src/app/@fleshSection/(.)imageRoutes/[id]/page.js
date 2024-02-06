import { cards } from "@/components/flashSection/flashSalesCards/flashCard/dataOfCards/dataOfCards";
import Image from "next/image";

export default function ImageModal({ params }) {
  const photo = cards.find((card) => card.id === parseInt(params.id));
  return (
    <Image
      alt={photo.altOfProduct}
      src={photo.sourceOfProduct}
      width={400}
      height={400}
    />
  );
}
