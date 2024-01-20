import Link from "next/link";
import styles from "./page.module.css";
import TopHeader from "@/components/topHeader/topHeader";
import Image from "next/image";
import Header from "@/components/header/header";
import MainImage from "@/components/mainImage/mainImage";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <MainImage />
    </main>
  );
}
