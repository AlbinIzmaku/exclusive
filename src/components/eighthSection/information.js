import Notification from "./infoCard";
import delivery from "/public/delivery.svg";
import service from "/public/service.svg";
import guarantee from "/public/guarantee.svg";
import styles from "@/styles/eighthSectionS/information.module.css";

export default function Information() {
  return (
    <div className={styles.mainDiv}>
      <Notification
        src={delivery}
        alt="Delivery"
        description="FREE AND FAST DELIVERY"
        paragraph="Free delivery for all orders over $140"
      />
      <Notification
        src={service}
        alt="Service"
        description="24/7 CUSTOMER SERVICE"
        paragraph="Friendly 24/7 customer support"
      />
      <Notification
        src={guarantee}
        alt="Guarantee"
        description="MONEY BACK GUARANTEE"
        paragraph="We return money within 30 days"
      />
    </div>
  );
}
