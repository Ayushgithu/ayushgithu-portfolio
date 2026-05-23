import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Update these paths if they differ in your project
import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", inquiryType: "Job Opportunity", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🚀 NEW STRICT EMAIL VALIDATION 🚀
    // This regex forces a format like: text @ text . text (min 2 chars for domain)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(form.email)) {
      setStatus("❌ Please enter a complete, valid email (e.g. name@gmail.com)");
      return; // Stop the function here so it doesn't send the email
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    emailjs
      .send(
        "service_r22nnz4", // Replace with your Service ID
        "template_svi2igi", // Replace with your Template ID
        {
          from_name: form.name,
          reply_to: form.email,
          inquiry_type: form.inquiryType,
          message: form.message,
        },
        "XHD7vAMra9nAS6GJa" // Replace with your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", inquiryType: "Job Opportunity", message: "" });
          setIsSubmitting(false);
          
          // Clear success message after 5 seconds
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send. Try again later.");
          setIsSubmitting(false);
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/Ayushgithu/" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/ayush-gupta-b986a0225" },
    { img: gmailLogo, title: "Email", link: "mailto:ayushguptajan22@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+917415557442" },  
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "radial-gradient(circle at 25% 25%, rgba(0,255,200,0.08), transparent 80%)",
        color: "#fff",
        padding: "4rem 1.5rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.8rem",
          marginBottom: "3rem",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center",
        }}
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      {/* Split Layout Container */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "4rem",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1000px"
      }}>
        
        {/* LEFT SIDE: Info & Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <p style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
          }}>
            Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
          </p>

          {/* Location Badge */}
          <div style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "rgba(0, 255, 200, 0.1)",
            border: "1px solid rgba(0, 255, 200, 0.3)",
            borderRadius: "20px",
            color: "#0ff",
            fontSize: "0.9rem",
            marginBottom: "2rem"
          }}>
            📍 Based in India (IST) | 🟢 Open to Work
          </div>

          {/* Quick Links */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}>
            {quickLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid var(--accent)",
                    background: "rgba(255,255,255,0.05)",
                    padding: "10px",
                  }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 400px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "rgba(255, 255, 255, 0.03)",
            padding: "2rem",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
            className="contact-input"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
            className="contact-input"
          />

          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            required
            style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
            className="contact-input"
          >
            <option value="Job Opportunity">Job Opportunity / Hiring</option>
            <option value="Freelance Project">Freelance Project</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Just saying Hi">Just saying Hi!</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ ...inputStyle, resize: "none" }}
            className="contact-input"
          />
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            style={{
              padding: "14px",
              marginTop: "8px",
              background: isSubmitting ? "gray" : "linear-gradient(90deg, var(--accent), var(--accent-2))",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1,
              transition: "opacity 0.3s"
            }}
          >
            {isSubmitting ? "⏳ Sending..." : "🚀 Send Message"}
          </motion.button>
          
          {status && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              style={{ marginTop: 10, textAlign: "center", color: status.includes("❌") ? "#ff4d4d" : "#00dfd8", fontWeight: "500" }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(0,0,0,0.2)",
  color: "#fff",
  outline: "none",
  fontSize: "1rem",
  transition: "all 0.3s ease",
};