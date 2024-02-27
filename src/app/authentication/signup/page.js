"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/signUp/signUp.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length === 0) {
      localStorage.setItem("userIdCounter", 1);
    }
  });

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      alert("This email is already taken. Please use a different email.");
      return;
    }

    let userIdCounter = parseInt(localStorage.getItem("userIdCounter")) || 1;

    const userId = userIdCounter;

    const encyptedPassword = caesarCipherEncrypt(password, 3);

    const userData = { id: userId, name, email, password: encyptedPassword };

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userIdCounter", userIdCounter + 1);

    setName("");
    setEmail("");
    setPassword("");
  }; 

  const caesarCipherEncrypt = (text, shift) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 style={{ fontWeight: "normal" }}>Create an account</h1>
      <h5>Enter your detalis below</h5>
      <input
        type="text"
        placeholder="Name"
        // ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email or Phone Number"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Create Account</button>
      {/* <button type="submit">Sign up with Google</button> */}
      <div className={styles.logIn}>
        <h4>Already have account?</h4>
        <Link href="/authentication/login">Log in</Link>
      </div>
    </form>
  );
}
