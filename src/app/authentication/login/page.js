"use client";

import styles from "@/styles/signUp/signUp.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedEmails, setMatchedEmails] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const firstLetter = searchTerm.charAt(0).toLowerCase();
      const matched = users.filter((user) =>
        user.email.toLowerCase().startsWith(firstLetter)
      );
      setMatchedEmails(matched);
    } else {
      setMatchedEmails([]);
    }
  }, [searchTerm, users]);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleInputBlur() {
    setMatchedEmails([]);
  }

  return (
    <form className={styles.form}>
      <h1 style={{ fontWeight: "normal" }}>Login to Exlusive</h1>
      <h5>Enter your details below</h5>
      <input
        type="email"
        placeholder="Email or Phone Number"
        value={searchTerm}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <div>
        <ul>
          {matchedEmails.map((user) => (
            <li key={user.id} style={{ listStyleType: "none" }}>
              {user.email}
            </li>
          ))}
        </ul>
      </div>
      <input type="password" placeholder="Password" />
      <div className={styles.logIn}>
        <button type="button" style={{ padding: "0 15px" }}>
          Log In
        </button>
        <h4>
          <Link href="" style={{ color: "#db4444", textDecoration: "none" }}>
            Forget Password?
          </Link>
        </h4>
      </div>
    </form>
  );
}
