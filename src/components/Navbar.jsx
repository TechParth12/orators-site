import { motion } from "framer-motion"

const links = ["Home", "About", "Events", "Team", "Contact"]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(124,92,255,0.15)"
      }}
    >
      {/* Club Logo */}
      <img
        src="/images/logo.png"
        alt="Orators Club"
        style={{
          height: "95px",
          objectFit: "contain"
        }}
      />

      {/* Links */}
      <div style={{ display: "flex", gap: "32px" }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: "#A8B0C0",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "1px",
              fontFamily: "sans-serif",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => (e.target.style.color = "#7C5CFF")}
            onMouseLeave={(e) => (e.target.style.color = "#A8B0C0")}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#events"
        style={{
          padding: "10px 24px",
          background: "linear-gradient(135deg, #7C5CFF, #9b7aff)",
          color: "#ffffff",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "1px",
          fontFamily: "sans-serif",
          fontWeight: "600",
          transition: "opacity 0.3s ease"
        }}
        onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        Join Event
      </a>
    </motion.nav>
  )
}