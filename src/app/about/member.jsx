import Instagram from "@/svg/instagram";
import LinkedIn from "@/svg/linkedIn";
import Twitter from "@/svg/twitter";
import Image from "next/image";
import styles from "@/styles/about/about.module.css";

export default function Member({ src, alt, name, position }) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div>
        <h1 style={{fontWeight: '500', margin: '5px 0'}}>{name}</h1>
        <h4 style={{fontWeight: '500 ', margin: '5px 0'}}>{position}</h4>
        <div className={styles.contact}>
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
    </div>
  );
}
