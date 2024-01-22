import styles from '@/components/flashSalesCards/flashSalesCards.module.css'
import FlashCard from './flashCard/flashCard';

export default function FlashSalesCards() {
  return (
    <section className={styles.section}>
      <FlashCard />
    </section>
  );
}
