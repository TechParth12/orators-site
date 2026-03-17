import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Navbar from "./Navbar"
import StarBackground from "./StarBackground"
import Footer from "./Footer"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

export default function CalendarPage() {
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <div>
      <StarBackground />
      <Navbar />

      <section
        style={{
          minHeight: "100vh",
          padding: "120px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          paddingTop: "120px"
        }}
      >
        {/* Title */}
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
          EVENT CALENDAR
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
            marginBottom: "40px"
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
            marginBottom: "50px"
          }}
        >
          Stay updated with all upcoming events, workshops, competitions,
          and meetups organized by the Orators Club. Click on the calendar
          below to view in full size. Mark your dates and never miss a
          chance to own the stage!
        </motion.p>

        {/* Calendar Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            y: -8,
            boxShadow: "0 0 40px rgba(124,92,255,0.3)"
          }}
          onClick={() => setImageOpen(true)}
          style={{
            maxWidth: "800px",
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(124,92,255,0.25)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
            cursor: "pointer",
            transition: "box-shadow 0.3s ease"
          }}
        >
          <img
            src="/images/calendar.jpg"
            alt="Event Calendar"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              transition: "transform 0.4s ease"
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          />
        </motion.div>

        {/* Click Hint */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: "20px",
            fontSize: "13px",
            color: "#7C5CFF",
            fontFamily: "sans-serif",
            letterSpacing: "1px"
          }}
        >
          🔍 Click on the calendar to view full size
        </motion.p>
      </section>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {imageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setImageOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 200,
              cursor: "pointer",
              padding: "20px"
            }}
          >
            {/* Close Button */}
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: "30px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "20px",
                color: "#ffffff"
              }}
            >
              ✕
            </div>

            {/* Large Image */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src="/images/calendar.jpg"
              alt="Event Calendar Full"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "90vh",
                borderRadius: "16px",
                border: "1px solid rgba(124,92,255,0.3)",
                objectFit: "contain"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}