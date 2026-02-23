import Hero3D from "./Hero3D"
import Navbar from "./Navbar"
import StarBackground from "./StarBackground"
import About from "./About"
import Vision from "./Vision"
import Faculty from "./Faculty"
import Team from "./Team"
import Events from "./Events"
import Register from "./Register"
import Footer from "./Footer"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div>

      <StarBackground />
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Hero3D />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: "12%",
            width: "100%",
            textAlign: "center",
            color: "#E8ECF1",
            zIndex: 1,
            padding: "0 20px"
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(124,92,255,0.3)",
              borderRadius: "40px",
              maxWidth: "90%"
            }}
          >
            <p
              style={{
                fontSize: "clamp(12px, 3.5vw, 20px)",
                letterSpacing: "2px",
                fontFamily: "serif",
                margin: 0
              }}
            >
              Own the Stage. Shape Your Voice.
            </p>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              marginTop: "24px",
              width: "26px",
              height: "44px",
              border: "2px solid #7C5CFF",
              borderRadius: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative"
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "#7C5CFF",
                borderRadius: "50%",
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)"
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* VISION / MISSION SECTION */}
      <Vision />

      {/* FACULTY INCHARGE */}
      <Faculty />

      {/* TEAM SECTION */}
      <Team />

      {/* EVENTS SECTION */}
      <Events />

      {/* REGISTRATION SECTION */}
      <Register />

      {/* FOOTER */}
      <Footer />

    </div>
  )
}