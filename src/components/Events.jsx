import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const events = [
  {
    title: "Coming Soon!!",
    date: "TBD",
    status: "upcoming",
    poster: "/images/events/event1/1.jpg",
    description: "Biggest Event!!.",
    images: [
      "/images/events/event1/1.jpg",
      "/images/events/event1/2.jpg",
      "/images/events/event1/3.jpg",
      "/images/events/event1/4.jpg",
      "/images/events/event1/5.jpg",
      "/images/events/event1/6.jpg",
      "/images/events/event1/7.jpg",
      "/images/events/event1/8.jpg"
    ]
  },
  {
    title: "Kourt Kalesh",
    date: "September 27, 2025",
    status: "past",
    poster: "/images/events/event2/1.jpg",
    description: "Courtroom Drama event -  where participants presented legal arguments, witness statements, and dramatic proceedings in a simulated court setting. It combined law, logic, and performance to deliver an engaging and thought provoking experience.",
    images: [
      "/images/events/event2/1.jpg",
      "/images/events/event2/2.jpg",
      "/images/events/event2/3.jpg",
      "/images/events/event2/4.jpg",
      "/images/events/event2/5.jpg",
      "/images/events/event2/6.jpg"
    ]
  },
  {
    title: "Brain Sprint 3.0",
    date: "May 3, 2025",
    status: "past",
    poster: "/images/events/event3/1.jpg",
    description: "Organised in LNUniverse 2025, the annual college fest of LNCT, by the Orator’s Club,  the Brainsprint evhaanent was a thirlling combination of knowledge, wit, creativity, and fun. It featured a series of mentally stimulating and physical activites.",
    images: [
      "/images/events/event3/1.jpg",
      "/images/events/event3/2.jpg",
      "/images/events/event3/3.jpg",
      "/images/events/event3/4.jpg",
      "/images/events/event3/5.jpg",
      "/images/events/event3/6.jpg",
      "/images/events/event3/7.jpg"
    ]
  }
]

const badgeStyle = (status) => ({
  display: "inline-block",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "11px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontFamily: "sans-serif",
  fontWeight: "600",
  marginBottom: "16px",
  background:
    status === "upcoming"
      ? "rgba(124,92,255,0.2)"
      : "rgba(214,179,106,0.15)",
  color: status === "upcoming" ? "#7C5CFF" : "#D6B36A",
  border:
    status === "upcoming"
      ? "1px solid rgba(124,92,255,0.4)"
      : "1px solid rgba(214,179,106,0.3)"
})

export default function Events() {
  const [expandedEvent, setExpandedEvent] = useState(null)

  const toggleGallery = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index)
  }

  return (
    <section
      id="events"
      style={{
        minHeight: "100vh",
        padding: "120px 60px",
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
        EVENTS
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

      {/* Events List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          maxWidth: "1000px",
          width: "100%"
        }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              border:
                event.status === "upcoming"
                  ? "1px solid rgba(124,92,255,0.3)"
                  : "1px solid rgba(124,92,255,0.15)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow:
                event.status === "upcoming"
                  ? "0 0 40px rgba(124,92,255,0.15)"
                  : "none"
            }}
          >
            {/* Top Section — Poster + Info */}
            <div
              style={{
                display: "flex",
                gap: "0px",
                flexWrap: "wrap"
              }}
            >
              {/* Poster */}
              <div
                style={{
                  flex: "1 1 400px",
                  height: "300px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={event.poster}
                  alt={event.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease"
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Info */}
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                {/* Badge */}
                <span style={badgeStyle(event.status)}>
                  {event.status === "upcoming" ? "⚡ Upcoming" : "✦ Past"}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "28px",
                    fontFamily: "serif",
                    color: "#ffffff",
                    letterSpacing: "2px",
                    marginBottom: "10px"
                  }}
                >
                  {event.title}
                </h3>

                {/* Date */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#A8B0C0",
                    fontFamily: "sans-serif",
                    marginBottom: "16px",
                    letterSpacing: "1px"
                  }}
                >
                  📅 {event.date}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#A8B0C0",
                    lineHeight: "1.8",
                    fontFamily: "sans-serif",
                    marginBottom: "24px"
                  }}
                >
                  {event.description}
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  {event.status === "upcoming" ? (
                    <a
                      href="#register"
                      style={{
                        display: "inline-block",
                        padding: "10px 28px",
                        background:
                          "linear-gradient(135deg, #7C5CFF, #9b7aff)",
                        color: "#ffffff",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontSize: "13px",
                        letterSpacing: "1px",
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                        transition: "opacity 0.3s ease"
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.opacity = "0.85")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.opacity = "1")
                      }
                    >
                      Register Now
                    </a>
                  ) : (
                    <span
                      style={{
                        display: "inline-block",
                        padding: "10px 28px",
                        background: "rgba(255,255,255,0.05)",
                        color: "#A8B0C0",
                        borderRadius: "30px",
                        fontSize: "13px",
                        letterSpacing: "1px",
                        fontFamily: "sans-serif",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}
                    >
                      Event Ended
                    </span>
                  )}

                  {/* View Gallery Button */}
                  <button
                    onClick={() => toggleGallery(index)}
                    style={{
                      padding: "10px 28px",
                      background: "transparent",
                      color: "#7C5CFF",
                      borderRadius: "30px",
                      fontSize: "13px",
                      letterSpacing: "1px",
                      fontFamily: "sans-serif",
                      fontWeight: "600",
                      border: "1px solid rgba(124,92,255,0.4)",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(124,92,255,0.15)"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent"
                    }}
                  >
                    {expandedEvent === index ? "Hide Gallery" : "View Gallery"}
                  </button>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <AnimatePresence>
              {expandedEvent === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "24px",
                      borderTop: "1px solid rgba(124,92,255,0.15)",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(180px, 1fr))",
                      gap: "16px"
                    }}
                  >
                    {event.images.map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: imgIndex * 0.08
                        }}
                        style={{
                          borderRadius: "16px",
                          overflow: "hidden",
                          border: "1px solid rgba(124,92,255,0.15)",
                          cursor: "pointer"
                        }}
                      >
                        <img
                          src={img}
                          alt={`${event.title} ${imgIndex + 1}`}
                          style={{
                            width: "100%",
                            height: "160px",
                            objectFit: "cover",
                            transition: "transform 0.4s ease"
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.transform = "scale(1.1)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.transform = "scale(1)")
                          }
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}