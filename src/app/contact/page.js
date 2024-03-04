"use client";

import Link from "next/link";
import styles from "@/styles/contact/contact.module.css";
import Phone from "@/svg/phone";
import Mail from "@/svg/mail";
import FormContact from "./formContact";

export default function ContactPage() {
  return (
    <main className={styles.contact}>
      <div className={styles.containerLinks}>
        <div className={styles.links}>
          <Link href="/" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Home
          </Link>
          <span> / </span>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <section className={styles.section}>
        <article className={styles.leftArticle}>
          <div className={styles.phoneContainer}>
            <div className={styles.phone}>
              <Phone />
              <h2 style={{ fontWeight: "400" }}>Call to Us</h2>
            </div>
            <p>We are avaliable 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            <hr style={{ border: "1px solid #a29494fe" }} />
          </div>
          <div
            className={styles.phoneContainer}
            style={{ height: "160px", marginTop: "20px" }}
          >
            <div className={styles.phone}>
              <Mail />
              <h2 style={{ fontWeight: "400" }}>Write to Us</h2>
            </div>
            <p>Fill out form and we will contact you within 24 hours.</p>
            <p>Email: costumer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </article>
        <article className={styles.formContainer}>
          <FormContact />
        </article>
      </section>
    </main>
  );
}
