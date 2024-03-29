"use client";

import Link from "next/link";
import styles from "@/styles/cart/cart.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Cart() {
  const [wishList, setWishList] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const storedWishList = localStorage.getItem("wishList");
    const storedQuantities = localStorage.getItem("quantities");

    if (storedWishList) {
      try {
        const parsedWishList = JSON.parse(storedWishList);
        setWishList(parsedWishList);
        const initialQuantities = parsedWishList.map(() => 1);
        setQuantities(initialQuantities);
        localStorage.setItem("quantities", JSON.stringify(initialQuantities));
      } catch (error) {
        console.log("Error parsing wishList: ", error);
      }
    }
  }, []);

  useEffect(() => {
    let total = 0;
    wishList.forEach((item, index) => {
      total += item.currentPrice * quantities[index];
    });
    setSubtotal(total);
    localStorage.setItem("subtotal", JSON.stringify(total));
  }, [quantities, wishList]);

  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);

    if (newQuantity >= 1) {
      const newQuantities = [...quantities];
      newQuantities[index] = newQuantity;
      setQuantities(newQuantities);

      localStorage.setItem("quantities", JSON.stringify(newQuantities));
    }
  };

  return (
    <main className={styles.contact}>
      <div className={styles.containerLinks}>
        <div className={styles.links}>
          <Link href="/" style={{ color: "rgba(0, 0, 0, 50%)" }}>
            Home
          </Link>
          <span> / </span>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
      <section className={styles.tableSection}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((item, index) => (
              <tr key={index}>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={item.sourceOfProduct}
                      alt={item.altOfProduct}
                      width={50}
                      height={50}
                    />
                    <p style={{ marginLeft: "10px" }}>{item.nameOfProduct}</p>
                  </div>
                </td>
                <td>{item.currentPrice}</td>
                <td>
                  <input
                    type="number"
                    value={quantities[index]}
                    onChange={(e) => handleQuantityChange(index, e)}
                    style={{ textAlign: "center", width: "80px" }}
                  />
                </td>
                <td>${item.currentPrice * quantities[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.buttons}>
          <button type="submit">Return to shop</button>
          <button type="submit">Update Cart</button>
        </div>
      </section>
      <section className={styles.totalSection}>
        <div className={styles.coupon}>
          <input type="text" placeholder="Coupon Code" />
          <button type="submit">Apply Coupon</button>
        </div>
        <article className={styles.totalCart}>
          <h4>Cart Total</h4>
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
          <button type="submit">
            <Link href="/cart/checkout">Process to checkout</Link>
          </button>
        </article>
      </section>
    </main>
  );
}
