import styles from '@/styles/thirdSectionS/cardOfCategory.module.css'

export default function CategoryCard({children, title}) {
  return (
    <div className={styles.maindiv}>
      <div className={styles.card}>
        {children}
        <h5 className={styles.text}>{title}</h5>
      </div>
    </div>
  )
}