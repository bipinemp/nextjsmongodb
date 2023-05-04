"use client";

import { useState } from "react";
import styles from "@/app/styles/contact.module.css";

const page = () => {
  const [data, setData] = useState({
    name: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  if (status === "success" || status === "error") {
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  }

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
        setStatus("success");
      } else {
        console.log("ERROR !!!");
        console.log("error");
      }
    } catch (e) {
      console.log(e);
      setStatus("error");
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
        {status === "success" && (
          <p className="success">Message sent Successfully :)</p>
        )}
        {status === "error" && (
          <p className="error">
            Something went wrong, while sending message, please try again :(
          </p>
        )}
      </form>
    </div>
  );
};

export default page;
