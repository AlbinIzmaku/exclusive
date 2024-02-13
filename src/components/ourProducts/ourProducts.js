import AllProducts from "../flashSection/allProducts/allProducts";
import CardsOfProducts from "./cardsOfProducts/cardsOfProducts";
import Explore from "./explore/explore";
import styles from '@/components/ourProducts/ourProducts.module.css'

export default function OurProducts() {
  return (
    <article className={styles.article}>
      <Explore />
      <CardsOfProducts />
      <AllProducts />
      
    </article>
  )
}