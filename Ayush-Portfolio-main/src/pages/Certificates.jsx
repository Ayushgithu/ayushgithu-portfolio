import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Tech Certificates only
const CERTS = [
  {
    title: "Java FullStack Development",
    org: "Apna College",
    date: "2024",
    img: "/certs/AyushApna.png",
    link: "/certs/AyushApna.png",
  },
  {
    title: "CCNA Certification",
    certLink: "https://www.credly.com/badges/9c00ec46-a5d1-49cb-9b30-101d194dc399",
    org: "Cisco",
    date: "2023",
    img: "/certs/ccna.png",
    link: "/certs/ccna.png",
  },
  {
    title: "HTML, CSS & JavaScript for Web Developers",
    org: "Coursera",
    date: "2022",
    img: "/certs/Coursera.png",
    link: "/certs/Coursera.png",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>
          Certificates 🏅
        </h2>
        <p className="lead" style={{ color: "#aaa" }}>
          My technical certifications and achievements.
        </p>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence>
            {CERTS.map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />

                <strong style={{ fontSize: 16 }}>{c.title}</strong>

                <div style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                {c.certLink && (
                  <a
                    href={c.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      marginTop: 6,
                      fontSize: 13,
                      color: "#3b82f6",
                      textDecoration: "underline",
                    }}
                  >
                    Verify Certificate
                  </a>
                )}

                <div style={{ marginTop: 12 }}>
                  <button
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
