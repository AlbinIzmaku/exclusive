import Link from "next/link";
import styles from "./page.module.css";
import TopHeader from "@/components/topHeader/topHeader";
import Header from "@/components/header/header";
import MainImage from "@/components/mainImage/mainImage";
import FlashSales from "@/components/flashSales/flashSales";
import FlashSalesCards from "@/components/flashSalesCards/flashSalesCards";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <MainImage />
      <FlashSales />
      <FlashSalesCards />
    </main>
  );
}
