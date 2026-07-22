import React, { useState, useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Connect.css";

export default function Connect() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
  const emailjsConfigured = Boolean(
    EMAILJS_SERVICE_ID &&
      EMAILJS_TEMPLATE_ID &&
      (EMAILJS_PUBLIC_KEY || EMAILJS_USER_ID)
  );

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:jeevaanandhan503@gmail.com';
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailjsConfigured) {
      setSending(true);
      setStatus("");

      if (EMAILJS_USER_ID && !EMAILJS_PUBLIC_KEY) {
        emailjs.init(EMAILJS_USER_ID);
      }

      const sendPromise = EMAILJS_PUBLIC_KEY
        ? emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current,
            EMAILJS_PUBLIC_KEY
          )
        : emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current
          );

      sendPromise
        .then(() => {
          setStatus("Message sent! It should arrive in the inbox shortly.");
          setForm({ name: "", email: "", subject: "", message: "" });
          setSending(false);
        })
        .catch((err) => {
          console.error("EmailJS error:", err);
          const errorText = err?.text || err?.message || "Unknown error";
          setStatus(
            `Email sending failed: ${errorText}. Your browser will open the mail app instead.`
          );
          setSending(false);
          const subject = encodeURIComponent(form.subject || "Message from website");
          const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
          window.location.href = `mailto:jeevaanandhan503@gmail.com?subject=${subject}&body=${body}`;
        });

      return;
    }

    const subject = encodeURIComponent(form.subject || "Message from website");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:jeevaanandhan503@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="connect glass panel">
      <h2 className="panel-title">
        <FiMail className="panel-title__icon" />
        Let's Connect
      </h2>

      <p className="connect__desc">
        I'm always open to discussing new opportunities and interesting projects.
      </p>

      {status && <p className="connect__status">{status}</p>}

      <div className="connect__info">
        <a href="mailto:jeevaanandhan503@gmail.com" onClick={handleEmailClick} className="connect__info-row">
          <FiMail />
          <span>jeevaanandhan503@gmail.com</span>
        </a>

        <a href="tel:7904551480" className="connect__info-row">
          <FiPhone />
          <span>7904551480</span>
        </a>

        <div className="connect__info-row">
          <FiMapPin />
          <span>Chennai, India</span>
        </div>
      </div>

      <div className="connect__socials">
        <a
          href="https://www.linkedin.com/in/jeeva-anandhan-535768289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:jeevaanandhan503@gmail.com"
          onClick={handleEmailClick}
        >
          <FiMail />
        </a>
      </div>

      <form ref={formRef} className="connect__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn--primary connect__submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"} <FiSend />
        </button>
      </form>

    </section>
  );
}