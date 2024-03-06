"use client";
import Link from "next/link";
import styles from "@/styles/cart/checkout.module.css";
import CheckoutForm from "./checkoutForm";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Checkout() {
  const [wishList, setWishList] = useState([]);
  const [subtotal, setSubtotal] = useState("");

  useEffect(() => {
    const storedWishList = localStorage.getItem("wishList");
    const storedSubtotal = localStorage.getItem("subtotal");
    setSubtotal(storedSubtotal);

    if (storedWishList) {
      try {
        const parsedWishList = JSON.parse(storedWishList);
        setWishList(parsedWishList);
      } catch (error) {
        console.log("Error parsing wishList: ", error);
      }
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.containerLinks}>
        <div className={styles.links}>
          <Link href="/" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Home
          </Link>
          <span> / </span>
          <Link href="/cart" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Cart
          </Link>
          <span> / </span>
          <Link href="/cart/checkout">Checkout</Link>
        </div>
      </div>
      <h1 style={{ fontWeight: "400" }}>Billing Details</h1>
      <section className={styles.section}>
        <CheckoutForm />
        <article className={styles.article}>
          <div>
            {wishList.map((item) => (
              <div key={item.id} className={styles.wishlist}>
                <Image
                  src={item.sourceOfProduct}
                  alt={item.altOfProduct}
                  width={50}
                  height={50}
                />
                <p>${item.nameOfProduct}</p>
                <p>${item.currentPrice}</p>
              </div>
            ))}
          </div>
          <div className={styles.totalCart}>
            <div>
              <p>Subtotal: </p>
              <p>${subtotal}</p>
            </div>
            <div>
              <p>Shipping: </p>
              <p>Free</p>
            </div>
            <div>
              <p>Total: </p>
              <p>${subtotal}</p>
            </div>
            <button
              type="submit"
              onClick={() => alert("Your order has been successfully placed.")}
            >
              Order
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
