import Image from "next/image";
import Link from "next/link";
import about from "/public/about.png";
import activeSailers from "/public/activeSailers.svg";
import sales from "/public/sales.svg";
import activeCostumers from "/public/activeCostumers.svg";
import monthlySales from "/public/monthlySales.svg";
import InfoCard from "@/components/eighthSection/infoCard";
import tomCrusie from "/public/tomCrusie.png";
import emaWatson from "/public/emaWatson.png";
import willSmith from "/public/willSmith.png";
import Member from "./member";
import Circle from "@/svg/circle";
import Information from "@/components/eighthSection/information";
import styles from "@/styles/about/about.module.css";

export default function About() {
  return (
    <main>
      <div className={styles.containerLinks}>
        <div className={styles.links}>
          <Link href="/" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Home
          </Link>
          <span> / </span>
          <Link href="/about">About</Link>
        </div>
      </div>
      <section className={styles.ourStory}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h1 style={{ fontSize: "50px" }}>Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia&apos;s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions. <br />
              Exclusive has 10,500 sallers and 300 brands and serves 3 millions
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranking from costumers.
            </p>
          </div>
        </div>
        <div>
          <Image src={about} alt="Our Story" />
        </div>
      </section>
      <section className={styles.mainDiv}>
        <InfoCard
          src={activeSailers}
          alt="Active Sailers"
          description="10.5k"
          paragraph="Sailers active in our site"
        />
        <InfoCard
          src={monthlySales}
          alt="Sales"
          description="33k"
          paragraph="Monthly product sale"
        />
        <InfoCard
          src={activeCostumers}
          alt="Active Costumer"
          description="45.5k"
          paragraph="Costumer active in our site"
        />
        <InfoCard
          src={sales}
          alt="Gross sales"
          description="25k"
          paragraph="Anual gross sale in our site"
        />
      </section>
      <section className={styles.images}>
        <Member
          src={tomCrusie}
          alt="Tom Crusie"
          name="Tom Crusie"
          position="Founder & Chairman"
        />
        <Member
          src={emaWatson}
          alt="Ema Watson"
          name="Ema Watson"
          position="Managing Director"
        />
        <Member
          src={willSmith}
          alt="Will Smith"
          name="Will Smith"
          position="Product Designer"
        />
      </section>
      <div className={styles.circles}>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
      <section className={styles.information}>
        <Information />
      </section>
    </main>
  );
}
