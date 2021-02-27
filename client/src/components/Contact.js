import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const { name, email, message } = contactData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/api/form", {
      name,
      email,
      message,
    });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    setContactData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h2 className="contact-header mb-3">Contact me</h2>
      <form onSubmit={handleSubmit}>
        {showMessage && (
          <h6 className="text-success text-center">
            Message sent successfully
          </h6>
        )}
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter fullname"
            value={contactData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email address"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            name="message"
            placeholder="Leave a comment here"
            style={{ height: "200px" }}
            value={contactData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          style={{ marginTop: "10px" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
