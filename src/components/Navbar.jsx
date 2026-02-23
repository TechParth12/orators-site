import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

const links = ["Home", "About", "Events", "Team", "Contact"]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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
    <>
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
          padding: "16px 40px",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(124,92,255,0.15)"
        }}
      >
        {/* Club Logo */}
        <img
          src="/images/logo.png"
          alt="Orators Club"
          style={{
            height: "36px",
            objectFit: "contain"
          }}
        />

        {/* Desktop Links */}
        <div
          className="desktop-links"
          style={{
            display: "flex",
            gap: "32px"
          }}
        >
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

        {/* Desktop CTA Button */}
        <motion.a
          href="#events"
          className="desktop-cta"
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

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "4px"
          }}
        >
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#ffffff",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#ffffff",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#ffffff",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            width: "100%",
            zIndex: 99,
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(124,92,255,0.2)",
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px 0"
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#E8ECF1",
                textDecoration: "none",
                fontSize: "16px",
                letterSpacing: "2px",
                fontFamily: "sans-serif",
                padding: "14px 0",
                transition: "color 0.3s ease",
                width: "100%",
                textAlign: "center",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              {link}
            </a>
          ))}

          <a
            href="#events"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "16px",
              padding: "12px 32px",
              background: "linear-gradient(135deg, #7C5CFF, #9b7aff)",
              color: "#ffffff",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "1px",
              fontFamily: "sans-serif",
              fontWeight: "600"
            }}
          >
            Join Event
          </a>
        </motion.div>
      )}
    </>
  )
}