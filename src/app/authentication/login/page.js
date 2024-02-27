'use client'
import { useState, useEffect } from "react";
import styles from "@/styles/signUp/signUp.module.css";
import Link from "next/link";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [showMatchedEmails, setShowMatchedEmails] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterEmails(value);
  };

  const filterEmails = (value) => {
    if (value.length > 0) {
      const firstLetter = value.charAt(0).toLowerCase();
      const matched = users.filter((user) =>
        user.email.toLowerCase().startsWith(firstLetter)
      );
      return matched;
    }
    return [];
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    setSearchTerm(email);
    setShowMatchedEmails(!showMatchedEmails);
  };

  const matchedEmails = filterEmails(searchTerm);

  const handleLogin = () => {
    const selectedUser = users.find((user) => user.email === selectedEmail);
    if (!selectedUser) {
      alert("User not found");
      return;
    }

    // Decrypt the password using Caesar Cipher
    const decryptedPassword = caesarCipherDecrypt(selectedUser.password, 3); // Decrypt with shift of 3

    if (password === decryptedPassword) {
      alert("Login Successful");
      // Proceed with your login logic
    } else {
      alert("Incorrect Password");
    }
  };

  // Caesar Cipher Decryption Function
  const caesarCipherDecrypt = (text, shift) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  };

  return (
    <form className={styles.form}>
      <h1 style={{ fontWeight: "normal" }}>Login to Exclusive</h1>
      <h5>Enter your details below</h5>
      <input
        type="email"
        placeholder="Email or Phone Number"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div>
        {showMatchedEmails && (
          <ul>
            {matchedEmails.map((user) => (
              <li
                key={user.id}
                onClick={() => handleEmailClick(user.email)}
                style={{ listStyleType: "none", cursor: "pointer" }}
              >
                {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.logIn}>
        <button type="button" style={{ padding: "0 15px" }} onClick={handleLogin}>
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
