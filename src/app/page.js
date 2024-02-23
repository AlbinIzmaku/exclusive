import Links from "@/components/firstSection/links/links";
import ImageSlider from "@/components/firstSection/imageSlider/imageSlider";
import SecondSection from "@/components/secondSection/secondSection";
import BrowseByCategory from "@/components/thirdSection/category/browseByCategory";
import CategoryCards from "@/components/thirdSection/cardsCategory/categoryCards";
import Best from "@/components/fourthSection/best/best";
import BestCards from "@/components/fourthSection/bestCards/bestCards";
import MusicSection from "@/components/fifthSection/musicSection";
import Explore from "@/components/sixthSection/explore/explore";
import ProductCards from "@/components/sixthSection/productCards/productCards";
import New from "@/components/seventhSection/new/new";
import NewImages from "@/components/seventhSection/newImages/newImages";
import Information from "@/components/eighthSection/information";
import UpIcon from "@/components/upIcon";
import Button from "@/components/button";
import styles from "@/app/page.module.css";

export default function Home({ team }) {
  return (
    <main>
      <section className={styles.firstSection}>
        <div></div>
        <Links />
        <ImageSlider />
      </section>
      <section>
        <SecondSection />
      </section>
      <section className={styles.thirdSection}>
        <BrowseByCategory />
        <CategoryCards />
      </section>
      <section className={styles.fourthSection}>
        {team}
        <Best />
        <BestCards />
      </section>
      <section>
        <MusicSection />
      </section>
      <section className={styles.sixthSection}>
        <Explore />
        <ProductCards />
        <Button />
      </section>
      <section className={styles.seventhSection}>
        <New />
        <NewImages />
      </section>
      <section>
        <Information />
        <UpIcon />
      </section>
    </main>
  );
}
