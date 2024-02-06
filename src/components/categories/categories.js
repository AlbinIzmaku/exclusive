import BrowseByCategory from "./browseByCategory/browseByCategory";
import styles from '@/components/categories/categories.module.css'
import CardsOfCategory from "./cardsOfCategory/cardsOfCategory";


export default function Categories() {
  return (
    <article className={styles.article}>
      <BrowseByCategory />
      <CardsOfCategory />
    </article>
  )
}