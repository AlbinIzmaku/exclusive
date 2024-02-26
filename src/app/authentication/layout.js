import Image from "next/image";
import signUpImage from "/public/signUp.png";
import styles from "@/styles/signUp/signUp.module.css";

export default function AuthLayout({ children }) {
  return (
    <main className={styles.main}>
      <section className={styles.leftSection}>
        <Image
          src={signUpImage}
          alt="Sign Up Image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "8/7",
          }}
          priority
        />
      </section>
      <section className={styles.rightSection}>{children}</section>
    </main>
  );
}
