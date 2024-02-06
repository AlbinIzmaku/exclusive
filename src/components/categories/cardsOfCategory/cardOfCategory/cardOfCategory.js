import styles from '@/components/categories/cardsOfCategory/cardOfCategory/cardOfCategory.module.css'
import Phones from '../cardsCategory/phones'
export default function CardOfCategory({children, title}) {
  return (
    <div className={styles.maindiv}>
      <div className={styles.card}>
        {children}
        <h5 className={styles.text}>{title}</h5>
      </div>
    </div>
  )
}