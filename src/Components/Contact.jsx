import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real-world scenario, this is where you'd handle form submission to an API.
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>
      <div style={styles.contactForm}>
        <p style={styles.paragraph}>
          Feel free to get in touch with me for any collaborations or queries. I would love to hear from you!
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        {isSubmitted && <p style={styles.successMessage}>Thank you for reaching out! I will get back to you soon.</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f7f7f7",
    color: "#333",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "600",
    color: "#4A90E2",
    marginBottom: "30px",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  contactForm: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    backgroundColor: "#4A90E2",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  successMessage: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "#28a745",
  },
};

export default Contact;
