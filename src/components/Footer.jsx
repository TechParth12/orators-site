import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const quickLinks = ["Home", "About", "Events", "Team", "Contact"]

const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/oratorsclub_lncts?igsh=MWt2dXlrdjl4bXk3Zw==" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/the-orator-s-club-lnct/" },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        padding: "80px 60px 40px",
        borderTop: "1px solid rgba(124,92,255,0.15)",
        position: "relative",
        zIndex: 2
      }}
    >
      {/* Main Footer Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {/* Column 1 — Brand */}
        <div style={{ flex: "1 1 300px" }}>
          <img
            src="/images/logo.png"
            alt="Orators Club"
            style={{
              height: "50px",
              objectFit: "contain",
              marginBottom: "20px"
            }}
          />
          <p
            style={{
              fontSize: "15px",
              color: "#A8B0C0",
              lineHeight: "1.8",
              fontFamily: "sans-serif",
              maxWidth: "320px"
            }}
          >
            The Orators Club — where voices rise, ideas ignite,
            and leaders are born. Own the stage. Shape your voice.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div style={{ flex: "1 1 160px" }}>
          <h4
            style={{
              fontSize: "16px",
              fontFamily: "serif",
              color: "#ffffff",
              letterSpacing: "3px",
              marginBottom: "20px",
              textTransform: "uppercase"
            }}
          >
            Quick Links
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {quickLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: "#A8B0C0",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  transition: "color 0.3s ease",
                  letterSpacing: "1px"
                }}
                onMouseEnter={(e) => (e.target.style.color = "#7C5CFF")}
                onMouseLeave={(e) => (e.target.style.color = "#A8B0C0")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 — Socials */}
        <div style={{ flex: "1 1 160px" }}>
          <h4
            style={{
              fontSize: "16px",
              fontFamily: "serif",
              color: "#ffffff",
              letterSpacing: "3px",
              marginBottom: "20px",
              textTransform: "uppercase"
            }}
          >
            Follow Us
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#A8B0C0",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  transition: "color 0.3s ease",
                  letterSpacing: "1px"
                }}
                onMouseEnter={(e) => (e.target.style.color = "#7C5CFF")}
                onMouseLeave={(e) => (e.target.style.color = "#A8B0C0")}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Column 4 — Contact */}
        <div style={{ flex: "1 1 220px" }}>
          <h4
            style={{
              fontSize: "16px",
              fontFamily: "serif",
              color: "#ffffff",
              letterSpacing: "3px",
              marginBottom: "20px",
              textTransform: "uppercase"
            }}
          >
            Contact
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#A8B0C0",
                fontFamily: "sans-serif",
                lineHeight: "1.7"
              }}
            >
              📧 theoratorsclub2.0@gmail.com
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#A8B0C0",
                fontFamily: "sans-serif",
                lineHeight: "1.7"
              }}
            >
              📍 LNCT, Bhopal
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#A8B0C0",
                fontFamily: "sans-serif",
                lineHeight: "1.7"
              }}
            >
              📞 +91 8604983078
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          marginTop: "60px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(124,92,255,0.1)",
          textAlign: "center",
          maxWidth: "1100px",
          margin: "60px auto 0"
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#A8B0C0",
            fontFamily: "sans-serif",
            letterSpacing: "1px",
            opacity: 0.6
          }}
        >
          © 2026 Orators Club. All rights reserved. Built with passion.
        </p>
      </motion.div>
    </footer>
  )
}