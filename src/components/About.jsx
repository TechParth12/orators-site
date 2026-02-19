import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "120px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 2
      }}
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "48px",
          fontFamily: "serif",
          color: "#ffffff",
          letterSpacing: "6px",
          marginBottom: "20px"
        }}
      >
        ABOUT US
      </motion.h2>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          width: "60px",
          height: "3px",
          background: "linear-gradient(90deg, #7C5CFF, #ff9e4d)",
          borderRadius: "10px",
          marginBottom: "50px"
        }}
      />

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          maxWidth: "700px",
          fontSize: "17px",
          lineHeight: "1.8",
          color: "#A8B0C0",
          textAlign: "center",
          fontFamily: "sans-serif",
          marginBottom: "60px"
        }}
      >
        We are a club at LNCT Group of Colleges, Bhopal, which encourages its 
        members to exhale their leadership qualities via various activities &
        events. There are 6 teams that works
        cooperatively for the successful and smooth functioning of the club.

        Orators Club is a dynamic community dedicated to fostering public speaking
        skills, building confidence, and echancing communication
        abilities.
      </motion.p>

      {/* Glass Cards */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {/* Card 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ y: -8 }}
          style={{
            width: "280px",
            padding: "36px 28px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(124,92,255,0.25)",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "36px", marginBottom: "16px" }}>🎤</div>
          <h3
            style={{
              fontSize: "20px",
              color: "#ffffff",
              fontFamily: "serif",
              marginBottom: "12px"
            }}
          >
            Public Speaking
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#A8B0C0",
              lineHeight: "1.7",
              fontFamily: "sans-serif"
            }}
          >
            Master the art of communication through workshops,
            open mics, and curated speaking sessions.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ y: -8 }}
          style={{
            width: "280px",
            padding: "36px 28px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(124,92,255,0.25)",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "36px", marginBottom: "16px" }}>⚔️</div>
          <h3
            style={{
              fontSize: "20px",
              color: "#ffffff",
              fontFamily: "serif",
              marginBottom: "12px"
            }}
          >
            Debates
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#A8B0C0",
              lineHeight: "1.7",
              fontFamily: "sans-serif"
            }}
          >
            Sharpen critical thinking through structured debates,
            parliamentary formats, and intellectual discourse.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -8 }}
          style={{
            width: "280px",
            padding: "36px 28px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(124,92,255,0.25)",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "36px", marginBottom: "16px" }}>🚀</div>
          <h3
            style={{
              fontSize: "20px",
              color: "#ffffff",
              fontFamily: "serif",
              marginBottom: "12px"
            }}
          >
            Leadership
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#A8B0C0",
              lineHeight: "1.7",
              fontFamily: "sans-serif"
            }}
          >
            Build confidence and leadership skills that
            translate from stage to boardroom to life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}