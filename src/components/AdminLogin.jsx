import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/admin/dashboard")
    } catch (err) {
      setError("Invalid email or password")
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        padding: "20px"
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          maxWidth: "420px",
          width: "100%",
          padding: "48px 36px",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(124,92,255,0.25)",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: "32px",
            fontFamily: "serif",
            color: "#ffffff",
            letterSpacing: "4px",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          ADMIN
        </h2>

        {/* Error */}
        {error && (
          <p
            style={{
              fontSize: "13px",
              color: "#ff6b6b",
              textAlign: "center",
              fontFamily: "sans-serif"
            }}
          >
            {error}
          </p>
        )}

        {/* Email */}
        <div>
          <label
            style={{
              fontSize: "13px",
              color: "#A8B0C0",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              marginBottom: "8px",
              display: "block"
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin email"
            required
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(124,92,255,0.2)",
              borderRadius: "14px",
              color: "#E8ECF1",
              fontSize: "14px",
              fontFamily: "sans-serif",
              outline: "none"
            }}
          />
        </div>

        {/* Password */}
        <div>
          <label
            style={{
              fontSize: "13px",
              color: "#A8B0C0",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              marginBottom: "8px",
              display: "block"
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            required
            style={{
              width: "100%",
              padding: "14px 18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(124,92,255,0.2)",
              borderRadius: "14px",
              color: "#E8ECF1",
              fontSize: "14px",
              fontFamily: "sans-serif",
              outline: "none"
            }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
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
            marginTop: "10px"
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  )
}