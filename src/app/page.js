import Link from "next/link";
import styles from "./page.module.css";
import TopHeader from "@/components/topHeader/topHeader";
import Header from "@/components/header/header";
import MainImage from "@/components/mainImage/mainImage";
import FlashSection from "@/components/flashSection/flashSection";
import Categories from "@/components/categories/categories";
import BestSelling from "@/components/bestSelling/bestSelling";
import MusicSection from "@/components/musicSection/musicSection";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <MainImage />
      <FlashSection />
      <Categories />
      <BestSelling />
      <MusicSection />
    </main>
  );
}
