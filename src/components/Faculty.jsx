import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

export default function Faculty() {
  return (
    <section
      id="faculty"
      style={{
        padding: "120px 60px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        FACULTY INCHARGE
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
          background: "linear-gradient(90deg, #D6B36A, #7C5CFF)",
          borderRadius: "10px",
          marginBottom: "60px"
        }}
      />

      {/* Faculty Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{
          y: -10,
          boxShadow: "0 0 40px rgba(214,179,106,0.3)"
        }}
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "40px 32px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(214,179,106,0.3)",
          borderRadius: "24px",
          textAlign: "center",
          cursor: "pointer",
          transition: "box-shadow 0.3s ease"
        }}
      >
        {/* Photo */}
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            margin: "0 auto 24px",
            overflow: "hidden",
            border: "3px solid rgba(214,179,106,0.4)"
          }}
        >
          <img
            src="/images/team/faculty1.jpg"
            alt="Faculty Incharge"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Name */}
        <h3
          style={{
            fontSize: "24px",
            fontFamily: "serif",
            color: "#ffffff",
            marginBottom: "8px",
            letterSpacing: "2px"
          }}
        >
          Dr. Amitbodh Upadhyay
        </h3>

        {/* Role */}
        <p
          style={{
            fontSize: "13px",
            color: "#D6B36A",
            fontFamily: "sans-serif",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "16px"
          }}
        >
          Faculty Coordinator 
        </p>

        {/* Department */}
        <p
          style={{
            fontSize: "14px",
            color: "#A8B0C0",
            fontFamily: "sans-serif",
            marginBottom: "16px",
            letterSpacing: "1px"
          }}
        >
          OSD, LNCTS
        </p>

        {/* Intro */}
        <p
          style={{
            fontSize: "14px",
            color: "#A8B0C0",
            lineHeight: "1.8",
            fontFamily: "sans-serif"
          }}
        >
          A constant pillar behind the scences.
          More than a faculty coordinator - a mentor, a guide, and the 
          quite strength behind the club.
          With unwavering commitment, he invested his time, energy, and trust into every initiative.
          Through long hours, challenges, and milestones, his dedication never once faded.
          The values this club stands for today reflects his influence and belief.
        </p>
      </motion.div>
    </section>
  )
}