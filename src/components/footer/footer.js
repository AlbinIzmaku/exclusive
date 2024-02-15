import Image from "next/image";
import Link from "next/link";
import qrCode from "/public/qrCode.svg";
import googlePlay from "/public/googlePlay.png";
import appStore from "/public/appStore.png";
import emailArrow from "/public/emailArrow.svg";
import copyright from "/public/copyright.svg";
import styles from "@/styles/footerS/footer.module.css";

export default function Footer() {
  return ( 
    <footer className={styles.footer}>
      <div className={styles.mainDiv}>
        <div className={styles.footerDiv}>
          <h2>
            <Link href="">Exclusive</Link>
          </h2>
          <h4>
            <Link href="">Subscribe</Link>
          </h4>
          <p>Get 10% off your first order</p>
          <div className={styles.inputContainer}>
            <input placeholder="Enter your email" className={styles.input} />
            <Image
              src={emailArrow}
              alt="Right Arrow"
              width={24}
              height={24}
              className={styles.emailArrow}
            />
          </div>
        </div>
        <div className={styles.footerDiv}>
          <h2>
            <Link href="">Support</Link>
          </h2>
          <p>
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className={styles.footerDiv}>
          <h2>
            <Link href="">Account</Link>
          </h2>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className={styles.footerDiv}>
          <h2>
            <Link href="">Quick Link</Link>
          </h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className={styles.footerDiv}>
          <h2>
            <Link href="">Download App</Link>
          </h2>
          <p>Save $3 with App New User Only</p>
          <div className={styles.qrAppStore}>
            <Image src={qrCode} alt="QR Code" width={80} height={80} />
            <div className={styles.googleApp}>
              <Image
                src={googlePlay}
                alt="Google Play"
                width={106}
                height={32}
              />
              <Image src={appStore} alt="App Store" width={106} height={32} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <Image src={copyright} alt="Copyright" width={21} height={20} />
        <h4>Copyright Rimel 2022. All right reserved</h4>
      </div>
    </footer>
  );
}
