import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiSend, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import yourPhoto from "../assets/your-photo.png";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume/Deena_P.pdf`;
    link.download = 'JeevaAnandhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:jeevaanandhan503@gmail.com';
  };

  return (
    <section id="home" className="hero glass panel">
      {/* decorative background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__bubble hero__bubble--1" />
      <div className="hero__bubble hero__bubble--2" />
      <div className="hero__bubble hero__bubble--3" />

      <div className="hero__grid">
        <div className="hero__content">
          <motion.span
            className="hero__pill"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            👋 Hello, I'm
          </motion.span>

          <motion.h1
            className="hero__name"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Jeeva <span>Anandhan</span>
          </motion.h1>

          <motion.p
            className="hero__role"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            Software Engineer | Full Stack Developer
          </motion.p>

          <motion.p
            className="hero__desc"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            Building scalable, user-centric applications with modern
            technologies. Turning ideas into real products that solve
            problems.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            <button className="btn btn--primary" onClick={handleDownloadResume}>
              <FiDownload /> Download Resume
            </button>
            <button className="btn btn--secondary" onClick={handleHireMe}>
              <FiSend /> Hire Me
            </button>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
          >
            <a href="https://www.linkedin.com/in/jeeva-anandhan-535768289/" aria-label="LinkedIn" className="hero__social"><FaLinkedinIn /></a>
            <a href="mailto:jeevaanandhan503@gmail.com" onClick={handleEmailClick} aria-label="Email" className="hero__social"><HiOutlineMail /></a>
            <a href="tel:7904551480" aria-label="Phone" className="hero__social"><FiPhone /></a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="hero__photo-stack" />

          <motion.div
            className="hero__photo-wrap"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hero__photo-placeholder">
              <img src={yourPhoto} alt="Jeeva Anandhan" className="hero__photo" />
            </div>

            <div className="hero__contact-card">
              <div className="hero__contact-row">
                <HiOutlineMail />
                <a href="mailto:jeevaanandhan503@gmail.com" onClick={handleEmailClick}>jeevaanandhan503@gmail.com</a>
              </div>
              <div className="hero__contact-row">
                <FiPhone />
                <a href="tel:7904551480">7904551480</a>
              </div>
              <div className="hero__contact-row">
                <FiMapPin />
                <span>Chennai, India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}