import New from "./new/new";
import styles from '@/components/categories/categories.module.css'
import NewImages from "./newImages/newImages";

export default function NewArrival() {
  return (
    <article className={styles.article}>
      <New />
      <NewImages />
    </article>
  )
}