import styles from "@/styles/contact/contact.module.css";
import { useState } from "react";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    textarea: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formDataObject = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      textarea: formData.textarea,
    };

    const localStorageItem = localStorage.getItem("localFormArray");
    let formArray = [];

    if (localStorageItem) {
      try {
        formArray = JSON.parse(localStorageItem);
      } catch (error) {
        console.error("Error parsing localStorage item:", error);
        formArray = [];
      }
    }

    formArray.push(formDataObject);
    localStorage.setItem("localFormArray", JSON.stringify(formArray));

    setFormData({
      name: "",
      email: "",
      phone: "",
      textarea: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          autoFocus
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
        <input
          type="phone"
          placeholder="Your Phone"
          required
          value={formData.phone}
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: e.target.value,
            });
          }}
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows={15}
        value={formData.textarea}
        onChange={(e) => {
          setFormData({
            ...formData,
            textarea: e.target.value,
          });
        }}
        style={{
          backgroundColor: "#f5f5f5",
          border: "none",
          padding: "5px",
        }}
      />
      <div className={styles.buttonClass}>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </div>
    </form>
  );
}
