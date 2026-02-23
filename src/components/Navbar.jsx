import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

const links = ["Home", "About", "Events", "Team", "Contact"]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

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
          height: "40px",
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

      {/* CTA Button — Hides on scroll down */}
      <motion.a
        href="#events"
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hidden ? 0.8 : 1,
          pointerEvents: hidden ? "none" : "auto"
        }}
        transition={{ duration: 0.3 }}
        style={{
          padding: "10px 24px",
          background: "linear-gradient(135deg, #7C5CFF, #9b7aff)",
          color: "#ffffff",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "1px",
          fontFamily: "sans-serif",
          fontWeight: "600"
        }}
      >
        Join Event
      </motion.a>
    </motion.nav>
  )
}