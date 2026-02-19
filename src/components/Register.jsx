import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase"

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(124,92,255,0.2)",
  borderRadius: "14px",
  color: "#E8ECF1",
  fontSize: "14px",
  fontFamily: "sans-serif",
  outline: "none",
  transition: "border 0.3s ease",
  backdropFilter: "blur(10px)"
}

const labelStyle = {
  fontSize: "13px",
  color: "#A8B0C0",
  fontFamily: "sans-serif",
  letterSpacing: "1px",
  marginBottom: "8px",
  display: "block"
}

const errorTextStyle = {
  fontSize: "12px",
  color: "#ff6b6b",
  fontFamily: "sans-serif",
  marginTop: "6px"
}

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    enrollment: "",
    event: "",
    teamCount: "",
    teamMembers: []
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit number"
    }
    if (!formData.college.trim()) newErrors.college = "College is required"
    if (!formData.enrollment.trim())
      newErrors.enrollment = "Enrollment number is required"
    if (!formData.event) newErrors.event = "Please select an event"
    if (!formData.teamCount) {
      newErrors.teamCount = "Team count is required"
    } else if (isNaN(formData.teamCount) || formData.teamCount < 1) {
      newErrors.teamCount = "Enter valid number"
    }

    if (formData.teamMembers.length > 0) {
      const memberErrors = []
      formData.teamMembers.forEach((member, index) => {
        if (!member.trim()) {
          memberErrors.push(index)
        }
      })
      if (memberErrors.length > 0) {
        newErrors.teamMembers = memberErrors
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "teamCount") {
      const count = parseInt(value) || 0
      const clampedCount = Math.min(Math.max(count, 0), 20)

      const currentMembers = [...formData.teamMembers]
      const newMembers = []

      for (let i = 0; i < clampedCount; i++) {
        newMembers.push(currentMembers[i] || "")
      }

      setFormData({
        ...formData,
        teamCount: value,
        teamMembers: newMembers
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handleMemberChange = (index, value) => {
    const updated = [...formData.teamMembers]
    updated[index] = value
    setFormData({ ...formData, teamMembers: updated })

    if (errors.teamMembers) {
      const updatedErrors = errors.teamMembers.filter((i) => i !== index)
      setErrors({
        ...errors,
        teamMembers: updatedErrors.length > 0 ? updatedErrors : undefined
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setLoading(true)

    try {
      await addDoc(collection(db, "registrations"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        enrollment: formData.enrollment,
        event: formData.event,
        teamCount: formData.teamCount,
        teamMembers: formData.teamMembers,
        registeredAt: new Date().toISOString()
      })

      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        enrollment: "",
        event: "",
        teamCount: "",
        teamMembers: []
      })
    } catch (error) {
      setLoading(false)
      alert("Registration failed. Please try again.")
      console.error(error)
    }
  }

  return (
    <section
      id="register"
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
        REGISTER
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

      <AnimatePresence mode="wait">
        {submitted ? (
          /* Success Screen */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: "500px",
              width: "100%",
              padding: "60px 40px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(124,92,255,0.25)",
              borderRadius: "24px",
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: "60px", marginBottom: "20px" }}>🎉</div>
            <h3
              style={{
                fontSize: "28px",
                fontFamily: "serif",
                color: "#ffffff",
                marginBottom: "16px",
                letterSpacing: "2px"
              }}
            >
              Registration Successful!
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "#A8B0C0",
                fontFamily: "sans-serif",
                lineHeight: "1.8",
                marginBottom: "30px"
              }}
            >
              Thank you for registering. We'll send you event details
              on your email soon. See you on stage!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                padding: "12px 32px",
                background: "linear-gradient(135deg, #7C5CFF, #9b7aff)",
                color: "#ffffff",
                borderRadius: "30px",
                border: "none",
                fontSize: "14px",
                letterSpacing: "1px",
                fontFamily: "sans-serif",
                fontWeight: "600",
                cursor: "pointer",
                transition: "opacity 0.3s ease"
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Register Another
            </button>
          </motion.div>
        ) : (
          /* Registration Form */
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              maxWidth: "600px",
              width: "100%",
              padding: "48px 40px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(124,92,255,0.25)",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}
          >
            {/* Name */}
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  ...inputStyle,
                  borderColor: errors.name
                    ? "rgba(255,107,107,0.5)"
                    : "rgba(124,92,255,0.2)"
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#7C5CFF")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,92,255,0.2)")
                }
              />
              {errors.name && <p style={errorTextStyle}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={{
                  ...inputStyle,
                  borderColor: errors.email
                    ? "rgba(255,107,107,0.5)"
                    : "rgba(124,92,255,0.2)"
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#7C5CFF")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,92,255,0.2)")
                }
              />
              {errors.email && <p style={errorTextStyle}>{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit phone number"
                style={{
                  ...inputStyle,
                  borderColor: errors.phone
                    ? "rgba(255,107,107,0.5)"
                    : "rgba(124,92,255,0.2)"
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#7C5CFF")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,92,255,0.2)")
                }
              />
              {errors.phone && <p style={errorTextStyle}>{errors.phone}</p>}
            </div>

            {/* College */}
            <div>
              <label style={labelStyle}>College</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="Enter your college name"
                style={{
                  ...inputStyle,
                  borderColor: errors.college
                    ? "rgba(255,107,107,0.5)"
                    : "rgba(124,92,255,0.2)"
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#7C5CFF")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,92,255,0.2)")
                }
              />
              {errors.college && (
                <p style={errorTextStyle}>{errors.college}</p>
              )}
            </div>

            {/* Enrollment */}
            <div>
              <label style={labelStyle}>Enrollment Number</label>
              <input
                type="text"
                name="enrollment"
                value={formData.enrollment}
                onChange={handleChange}
                placeholder="Enter enrollment number"
                style={{
                  ...inputStyle,
                  borderColor: errors.enrollment
                    ? "rgba(255,107,107,0.5)"
                    : "rgba(124,92,255,0.2)"
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#7C5CFF")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,92,255,0.2)")
                }
              />
              {errors.enrollment && (
                <p style={errorTextStyle}>{errors.enrollment}</p>
              )}
            </div>

            {/* Event Selection */}
            <div>
              <label style={labelStyle}>Select Event</label>
              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  borderColor: errors.event
                    ? "rgba(255,107,107,0.5)"
                    : "rgba(124,92,255,0.2)",
                  appearance: "none",
                  cursor: "pointer"
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#7C5CFF")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,92,255,0.2)")
                }
              >
                <option value="" style={{ background: "#0b0b0f" }}>
                  Choose an event
                </option>
                <option value="event1" style={{ background: "#0b0b0f" }}>
                  Upcoming Event Title
                </option>
              </select>
              {errors.event && <p style={errorTextStyle}>{errors.event}</p>}
            </div>

            {/* Team Count */}
            <div>
              <label style={labelStyle}>Team Members Count</label>
              <input
                type="number"
                name="teamCount"
                value={formData.teamCount}
                onChange={handleChange}
                placeholder="Number of team members"
                min="1"
                max="20"
                style={{
                  ...inputStyle,
                  borderColor: errors.teamCount
                    ? "rgba(255,107,107,0.5)"
                    : "rgba(124,92,255,0.2)"
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "#7C5CFF")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(124,92,255,0.2)")
                }
              />
              {errors.teamCount && (
                <p style={errorTextStyle}>{errors.teamCount}</p>
              )}
            </div>

            {/* Dynamic Team Member Names */}
            <AnimatePresence>
              {formData.teamMembers.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    padding: "24px",
                    background: "rgba(124,92,255,0.06)",
                    borderRadius: "16px",
                    border: "1px solid rgba(124,92,255,0.15)"
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#7C5CFF",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      marginBottom: "4px"
                    }}
                  >
                    Enter Team Member Names
                  </p>

                  {formData.teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                    >
                      <label
                        style={{
                          ...labelStyle,
                          fontSize: "12px",
                          marginBottom: "6px"
                        }}
                      >
                        Member {index + 1}
                      </label>
                      <input
                        type="text"
                        value={member}
                        onChange={(e) =>
                          handleMemberChange(index, e.target.value)
                        }
                        placeholder={`Enter name of member ${index + 1}`}
                        style={{
                          ...inputStyle,
                          borderColor:
                            errors.teamMembers &&
                            errors.teamMembers.includes(index)
                              ? "rgba(255,107,107,0.5)"
                              : "rgba(124,92,255,0.2)"
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#7C5CFF")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor =
                            "rgba(124,92,255,0.2)")
                        }
                      />
                      {errors.teamMembers &&
                        errors.teamMembers.includes(index) && (
                          <p style={errorTextStyle}>
                            Member {index + 1} name is required
                          </p>
                        )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "16px",
                background: loading
                  ? "rgba(124,92,255,0.4)"
                  : "linear-gradient(135deg, #7C5CFF, #9b7aff)",
                color: "#ffffff",
                borderRadius: "30px",
                border: "none",
                fontSize: "16px",
                letterSpacing: "2px",
                fontFamily: "sans-serif",
                fontWeight: "600",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                marginTop: "10px"
              }}
            >
              {loading ? "Submitting..." : "Register Now"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  )
}