"use client";

import { useState } from "react";
import styles from "@/app/styles/contact.module.css";

const page = () => {
  const [data, setData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/contactform`, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          message: data.message,
        }),
      });
      if (response.status === 200) {
        setData({
          name: "",
          message: "",
        });
      } else {
        console.log("ERROR !!!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.contactform}>
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          value={data.name}
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          onChange={handleChange}
          value={data.message}
          type="text"
          placeholder="Message"
          id="message"
          name="message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
