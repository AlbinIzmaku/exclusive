import styles from '@/components/flashSalesCards/flashCard/flashCard.module.css'
import Stars from './componentsOfCard/stars';

export default function ContentOfCard() {
  return (
    <div className={styles.content}>
      <h4>Havit HV-G-92 Gamepad</h4>
      <div className={styles.price}>
        <p style={{ color: "#db4444" }}>$120</p>
        <p>
          <del style={{ color: "#888" }}>$160</del>
        </p>
      </div>
      <div className={styles.star}>
        <Stars />
        <p style={{ color: "#888" }}>(88)</p>
      </div>
    </div>
  );
}
