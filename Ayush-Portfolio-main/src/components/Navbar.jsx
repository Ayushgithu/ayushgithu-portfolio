import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="nav">
      {/* --- Left Logo + Name --- */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 100 }}>
        <motion.div
          className="logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "var(--accent)",
          }}
        >
          AG
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ margin: 0, fontSize: 15 }}>Ayush Gupta</h1>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            Java FullStack Developer
          </div>
        </div>
      </div>

      {/* --- Hamburger Menu Icon (Mobile/Tablet Only) --- */}
      <div 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </div>

      {/* --- Center Navigation Links (Desktop) --- */}
      <div className="desktop-nav">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            style={{
              position: "relative",
              fontSize: "0.95rem",
              textDecoration: "none",
              color: "white",
              fontWeight: 500,
            }}
          >
            {({ isActive }) => (
              <motion.div
                whileHover={{ color: "var(--accent)" }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <motion.span animate={{ color: isActive ? "var(--accent)" : "white" }}>
                  {l.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    style={{
                      position: "absolute",
                      bottom: "-8px",
                      width: "100%",
                      height: "2px",
                      borderRadius: "1px",
                      backgroundColor: "var(--accent)",
                      boxShadow: "0 0 6px var(--accent)",
                    }}
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>

      {/* --- Mobile Dropdown Menu (Full Screen overlay) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.05) }}
              >
                <NavLink
                  to={l.to}
                  end
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    fontSize: "1.5rem",
                    textDecoration: "none",
                    fontWeight: 600,
                    color: isActive ? "var(--accent)" : "white",
                  })}
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}