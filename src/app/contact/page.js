import Link from "next/link";
import styles from "@/styles/contact/contact.module.css";
import Phone from "@/svg/phone";
import Mail from "@/svg/mail";

export default function ContactPage() {
  return (
    <main>
      <div className={styles.containerLinks}>
        <div className={styles.links}>
          <Link href="/" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Home
          </Link>
          <span> / </span>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <section>
        <article>
          <div>
            <div>
              <Phone />
              <h2>Call to Us</h2>
            </div>
            <p>We are avaliable 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div>
            <div>
              <Mail />
              <h2>Write to Us</h2>
            </div>
            <p>Fill out form and we will contact you within 24 hours.</p>
            <p>Email: costumer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </article>
      </section>
    </main>
  );
}
