import Link from "next/link";
import styles from "@/app/page.module.css";

import FlashSection from "@/components/flashSection/flashSection";
import Categories from "@/components/categories/categories";
import BestSelling from "@/components/bestSelling/bestSelling";
import MusicSection from "@/components/musicSection/musicSection";
import OurProducts from "@/components/ourProducts/ourProducts";
import NewArrival from "@/components/newArrival/newArrival";
import NotificationForClient from "@/components/notificationForClient/notificationForClient";
import UpIcon from "@/components/upIcon/upIcon";
// import Links from "@/components/firstSection/links/links";
// import TopImage from "@/components/firstSection/firstSection/topImage";
import BrowseByCategory from "@/components/categories/browseByCategory/browseByCategory";
import CardsOfCategory from "@/components/categories/cardsOfCategory/cardsOfCategory";
import Links from "@/components/mainImage/links/links";
import TopImage from "@/components/mainImage/topImage/topImage";

export default function Home() {
  return (
    <main>
      {/* <TopHeader /> */}
      {/* <Header /> */}
      <section className={styles.sectionTopImage}>
        <div></div>
        <Links />
        <TopImage />
      </section>
      {/* <MainImage /> */}
      <section>
        <FlashSection />
      </section>
      <section className={styles.sectionCategory}>
        <BrowseByCategory />
        <CardsOfCategory />
      </section>
      {/* <Categories /> */}
      <BestSelling />
      <MusicSection />
      <OurProducts />
      <NewArrival />
      <NotificationForClient />
      <UpIcon />
      {/* <Footer /> */}
    </main>
  );
}
