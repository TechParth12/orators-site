import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const cardStyle = {
  flex: "1 1 400px",
  maxWidth: "500px",
  padding: "48px 36px",
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(124,92,255,0.2)",
  borderRadius: "24px",
  textAlign: "left"
}

const bulletStyle = {
  fontSize: "15px",
  color: "#A8B0C0",
  lineHeight: "1.9",
  fontFamily: "sans-serif",
  marginBottom: "12px",
  paddingLeft: "12px",
  position: "relative"
}

const dotStyle = {
  position: "absolute",
  left: "-8px",
  top: "10px",
  width: "6px",
  height: "6px",
  borderRadius: "50%"
}

export default function Vision() {
  return (
    <section
      id="vision"
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
        OUR PURPOSE
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
          background: "linear-gradient(90deg, #7C5CFF, #D6B36A)",
          borderRadius: "10px",
          marginBottom: "60px"
        }}
      />

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1100px"
        }}
      >
        {/* Vision Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ y: -8 }}
          style={cardStyle}
        >
          {/* Icon */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(124,92,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: "28px"
            }}
          >
            👁️
          </div>

          <h3
            style={{
              fontSize: "28px",
              fontFamily: "serif",
              color: "#7C5CFF",
              letterSpacing: "3px",
              marginBottom: "24px",
              textAlign: "center"
            }}
          >
            VISION
          </h3>

          {/* Bullet Points */}
          <div style={{ paddingLeft: "20px" }}>
            <div style={bulletStyle}>
              <div style={{ ...dotStyle, background: "#7C5CFF" }} />
              To establish ourselves as the top platform for honing public
              speaking skills within our College.
            </div>

            <div style={bulletStyle}>
              <div style={{ ...dotStyle, background: "#7C5CFF" }} />
              To motivate and empower students to express their ideas and
              opinions with confidence.
            </div>

            <div style={bulletStyle}>
              <div style={{ ...dotStyle, background: "#7C5CFF" }} />
              To gain recognition as a prominent club that cultivates,
              articulates, confident and influential speakers.
            </div>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ y: -8 }}
          style={cardStyle}
        >
          {/* Icon */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(214,179,106,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: "28px"
            }}
          >
            🎯
          </div>

          <h3
            style={{
              fontSize: "28px",
              fontFamily: "serif",
              color: "#D6B36A",
              letterSpacing: "3px",
              marginBottom: "24px",
              textAlign: "center"
            }}
          >
            MISSION
          </h3>

          {/* Bullet Points */}
          <div style={{ paddingLeft: "20px" }}>
            <div style={bulletStyle}>
              <div style={{ ...dotStyle, background: "#D6B36A" }} />
              To foster a culture of effective communication and public
              speaking among students.
            </div>

            <div style={bulletStyle}>
              <div style={{ ...dotStyle, background: "#D6B36A" }} />
              To provide a supportive environment for students to practice
              and enhance their oratory skills.
            </div>

            <div style={bulletStyle}>
              <div style={{ ...dotStyle, background: "#D6B36A" }} />
              To instill confidence and leadership qualities in students
              through activities and mentorship.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}