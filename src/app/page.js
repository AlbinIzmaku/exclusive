import Link from "next/link";
import styles from "./page.module.css";
import TopHeader from "@/components/topHeader/topHeader";
import Header from "@/components/header/header";
import MainImage from "@/components/mainImage/mainImage";
import FlashSection from "@/components/flashSection/flashSection";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <MainImage />
      <FlashSection />
    </main>
  );
}
