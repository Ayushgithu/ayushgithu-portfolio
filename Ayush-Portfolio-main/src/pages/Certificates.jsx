import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ TECH Certificates only
const CERTS = [
  {
    title: "Java FullStack Development",
    org: "Apna College",
    date: "2024",
    img: "/certs/AyushApna.png",
    pdf: "/certs/AyushApna.pdf",
  },
  {
    title: "CCNA Certification",
    org: "Cisco",
    date: "2023",
    img: "/certs/ccna.png",
    pdf: "/certs/ccna.pdf",
    certLink:
      "https://www.credly.com/badges/9c00ec46-a5d1-49cb-9b30-101d194dc399",
  },
  {
    title: "HTML, CSS & JavaScript for Web Developers",
    org: "Coursera",
    date: "2022",
    img: "/certs/Coursera.png",
    pdf: "/certs/Coursera.pdf",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div
        className="card"
        style={{
          background: "#111",
          borderRadius: 14,
          padding: 28,
        }}
      >
        {/* Header */}
        <h2 style={{ fontSize: "1.9rem", color: "#fff", marginBottom: 6 }}>
          Certificates 🏅
        </h2>
        <p style={{ color: "#aaa", marginBottom: 24 }}>
          My technical certifications & achievements.
        </p>

        {/* Certificates Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          <AnimatePresence>
            {CERTS.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 20px rgba(59,130,246,0.5)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 14,
                  padding: 16,
                  color: "#fff",
                }}
              >
                {/* Certificate Image */}
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginBottom: 12,
                  }}
                />

                {/* Title */}
                <strong style={{ fontSize: 16 }}>{c.title}</strong>

                {/* Org & Date */}
                <div style={{ fontSize: 13, color: "#bbb", marginTop: 4 }}>
                  {c.org} • {c.date}
                </div>

                {/* Verify Link */}
                {c.certLink && (
                  <a
                    href={c.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      marginTop: 6,
                      fontSize: 13,
                      color: "#60a5fa",
                      textDecoration: "underline",
                      wordBreak: "break-all",
                    }}
                  >
                    Verify Certificate
                  </a>
                )}

                {/* Buttons */}
                <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                  <button
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#3b82f6",
                      border: "none",
                      color: "#fff",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    View
                  </button>

                  <a
                    href={c.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "#22c55e",
                      color: "#000",
                      padding: "6px 14px",
                      borderRadius: 6,
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    PDF
                  </a>
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
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
            }}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 12,
                boxShadow: "0 0 30px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
