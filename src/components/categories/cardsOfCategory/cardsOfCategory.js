import CardOfCategory from "./cardOfCategory/cardOfCategory";
import Camera from "./cardsCategory/camera";
import Computers from "./cardsCategory/computers";
import Gaming from "./cardsCategory/gaming";
import Headphones from "./cardsCategory/headphones";
import Phones from "./cardsCategory/phones";
import SmartWatch from "./cardsCategory/smartWatch";
import styles from "@/components/categories/cardsOfCategory/cardsOfCategory.module.css";

export default function CardsOfCategory() {
  return (
    <section className={styles.section}>
      <CardOfCategory title="Phones">
        <Phones />
      </CardOfCategory>
      <CardOfCategory title="Computers">
        <Computers />
      </CardOfCategory>
      <CardOfCategory title="SmartWatch">
        <SmartWatch />
      </CardOfCategory>
      <CardOfCategory title="Camera">
        <Camera />
      </CardOfCategory>
      <CardOfCategory title="HeadPhones">
        <Headphones />
      </CardOfCategory>
      <CardOfCategory title="Gaming">
        <Gaming />
      </CardOfCategory>
    </section>
  );
}
