import Image from "next/image";
import styles from "@/components/newArrival/newImages/newImages.module.css";
import Link from "next/link";
import sonySvg from "/public/sonyAsSv.svg";
import lady from "/public/lady.svg";
import speakers from "/public/speakers.svg";
import perfume from "/public/perfume.svg";
import sony from '/public/sony.png'

export default function NewImages() {
  return (
    <section className={styles.section}>
      <div className={styles.leftImage}>
        <Image
          src={sonySvg}
          alt="SVG"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <div className={styles.description}>
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
            PlayStation 5
          </h1>
          <p>
            Black and White version of the PS5 <br /> coming out on sale.
          </p>
          <Link href="" className={styles.link}>
            Shop Now
          </Link>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.topImage}>
          <Image
            src={lady}
            alt="Lady"
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className={styles.descriptionOfWomen}>
            <h1 style={{ fontWeight: "bold" }}>Women&apos;s Collections</h1>
            <p>
              Featured woman colletions that <br /> give you another vibe.
            </p>
            <Link href="" className={styles.link}>
              Shop Now
            </Link>
          </div>
        </div>
        <div className={styles.bottomImages}>
          <div className={styles.speakersImage}>
            <Image
              src={speakers}
              alt="Lady"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
              className={styles.link}
            />
            <div className={styles.descriptionOfSpeakers}>
              <h1 style={{ fontWeight: "bold" }}>Speakers</h1>
              <p>Amazon wireless speakers</p>
              <Link href="" className={styles.link}>
                Shop Now
              </Link>
            </div>
          </div>
          <div className={styles.perfumeImage}>
            <Image
              src={perfume}
              alt="Lady"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div className={styles.descriptionOfSpeakers}>
              <h1 style={{ fontWeight: "bold" }}>Perfume</h1>
              <p>GUCCI INTENSE OUD EDP</p>
              <Link href="" className={styles.link}>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
