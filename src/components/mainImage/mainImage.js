import Link from "next/link";
import styles from '@/components/mainImage/mainImage.module.css'
import Links from "./links/links";
import TopImage from "./topImage/topImage";

export default function MainImage() {
  return (
    <article className={styles.article}>
      <div></div>
      <Links />
      <TopImage />
    </article>
  )
}