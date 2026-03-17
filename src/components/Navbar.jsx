import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const navItems = [
  { name: "Home", path: "/", hash: "#home" },
  { name: "About", path: "/", hash: "#about" },
  { name: "Events", path: "/", hash: "#events" },
  { name: "Team", path: "/team", hash: "" },
  { name: "Contact", path: "/", hash: "#contact" }
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const navigate = useNavigate()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const handleNavClick = (item) => {
    setMenuOpen(false)

    if (item.path === "/" && location.pathname === "/") {
      // Same page — scroll to section
      if (item.hash) {
        const element = document.querySelector(item.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else if (item.path === "/") {
      // Go to home then scroll
      navigate("/")
      setTimeout(() => {
        if (item.hash) {
          const element = document.querySelector(item.hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      }, 300)
    } else {
      // Go to separate page
      navigate(item.path)
      window.scrollTo(0, 0)
    }
  }

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
          onClick={() => {
            navigate("/")
            window.scrollTo(0, 0)
          }}
          style={{
            height: "36px",
            objectFit: "contain",
            cursor: "pointer"
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
          {navItems.map((item) => (
            <span
              key={item.name}
              onClick={() => handleNavClick(item)}
              style={{
                color: "#A8B0C0",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "1px",
                fontFamily: "sans-serif",
                transition: "color 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#7C5CFF")}
              onMouseLeave={(e) => (e.target.style.color = "#A8B0C0")}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <motion.span
          className="desktop-cta"
          onClick={() => {
            navigate("/")
            setTimeout(() => {
              const el = document.querySelector("#events")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }, 300)
          }}
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
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Join Event
        </motion.span>

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
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none"
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
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none"
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
          {navItems.map((item) => (
            <span
              key={item.name}
              onClick={() => handleNavClick(item)}
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
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                cursor: "pointer"
              }}
            >
              {item.name}
            </span>
          ))}

          <span
            onClick={() => {
              setMenuOpen(false)
              navigate("/")
              setTimeout(() => {
                const el = document.querySelector("#events")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }, 300)
            }}
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
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Join Event
          </span>
        </motion.div>
      )}
    </>
  )
}