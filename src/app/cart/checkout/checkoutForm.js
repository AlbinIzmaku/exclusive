"use client";
import styles from "@/styles/cart/checkout.module.css";
import { useEffect, useState } from "react";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    street: "",
    apartament: "",
    city: "",
    phone: "",
    email: "",
    isChecked: false,
  });

  useEffect(() => {
    const savedForms = localStorage.getItem("savedForms");
    if (savedForms) {
      setForm(JSON.parse(savedForms));
    }
  }, []);

  useEffect(() => {
    if (form.isChecked) {
      const savedForms = localStorage.getItem("savedForms");
      const forms = savedForms ? JSON.parse(savedForms) : [];
      const updatedForms = [...forms, form];
      localStorage.setItem("savedForms", JSON.stringify(updatedForms));
    } else {
      // Remove the current form from savedForms if isChecked is false
      const savedForms = localStorage.getItem("savedForms");
      if (savedForms) {
        const forms = JSON.parse(savedForms);
        const updatedForms = forms.filter((savedForm) => {
          return savedForm.name !== form.name; // Assuming 'name' is unique
        });
        localStorage.setItem("savedForms", JSON.stringify(updatedForms));
      }
    }
  }, [form.isChecked, form]);
  

  return (
    <form className={styles.form}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          autoFocus
          required
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Company Name</label>
        <input
          type="text"
          value={form.company}
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Street Address</label>
        <input
          type="text"
          value={form.street}
          onChange={(e) =>
            setForm({
              ...form,
              street: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Apartment, floor, etc (optional)</label>
        <input
          type="text"
          value={form.apartament}
          onChange={(e) =>
            setForm({
              ...form,
              apartament: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Town/City</label>
        <input
          type="text"
          value={form.city}
          onChange={(e) =>
            setForm({
              ...form,
              city: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={form.isChecked}
          onChange={(e) =>
            setForm({
              ...form,
              isChecked: e.target.checked,
            })
          }
        />
        <label>Save information</label>
      </div>
    </form>
  );
}
