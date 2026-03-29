import { useState, useEffect } from "react"
import { collection, getDocs, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore"
import { signOut } from "firebase/auth"
import { db, auth } from "../firebase"
import { useNavigate } from "react-router-dom"

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [regStatus, setRegStatus] = useState("open")
  const [toggling, setToggling] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    fetchRegistrations()
    fetchRegStatus()
  }, [])

  const fetchRegistrations = async () => {
    setLoading(true)
    try {
      const snap = await getDocs(collection(db, "registrations"))
      const data = snap.docs.map((d) => ({
        id: d.id,
        ...d.data()
      }))
      setRegistrations(data)
    } catch (error) {
      console.error("Error:", error)
    }
    setLoading(false)
  }

  const fetchRegStatus = async () => {
    try {
      const docRef = doc(db, "settings", "registrations")
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setRegStatus(docSnap.data().status || "open")
      } else {
        await setDoc(docRef, { status: "open" })
        setRegStatus("open")
      }
    } catch (error) {
      console.error("Error fetching status:", error)
    }
  }

  const toggleRegStatus = async () => {
    setToggling(true)
    try {
      const newStatus = regStatus === "open" ? "closed" : "open"
      const docRef = doc(db, "settings", "registrations")
      await setDoc(docRef, { status: newStatus })
      setRegStatus(newStatus)
    } catch (error) {
      console.error("Error toggling:", error)
      alert("Failed to update status. Try again.")
    }
    setToggling(false)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Delete this registration?")) {
      try {
        await deleteDoc(doc(db, "registrations", id))
        setRegistrations(registrations.filter((r) => r.id !== id))
      } catch (error) {
        console.error("Error:", error)
      }
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/admin")
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        padding: "40px",
        color: "#ffffff",
        fontFamily: "sans-serif"
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontFamily: "serif",
            letterSpacing: "4px"
          }}
        >
          ADMIN DASHBOARD
        </h1>

        <div style={{ display: "flex", gap: "16px" }}>
          <button
            onClick={fetchRegistrations}
            style={{
              padding: "10px 24px",
              background: "rgba(124,92,255,0.2)",
              color: "#7C5CFF",
              border: "1px solid rgba(124,92,255,0.4)",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "13px",
              letterSpacing: "1px"
            }}
          >
            Refresh
          </button>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 24px",
              background: "rgba(255,107,107,0.15)",
              color: "#ff6b6b",
              border: "1px solid rgba(255,107,107,0.3)",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "13px",
              letterSpacing: "1px"
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats + Registration Toggle */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >
        {/* Total Registrations */}
        <div
          style={{
            padding: "24px 36px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(124,92,255,0.2)",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontSize: "36px",
              color: "#7C5CFF",
              fontWeight: "700"
            }}
          >
            {registrations.length}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#A8B0C0",
              letterSpacing: "1px"
            }}
          >
            Total Registrations
          </p>
        </div>

        {/* ✅ Registration Toggle Card */}
        <div
          style={{
            padding: "24px 36px",
            background: "rgba(255,255,255,0.04)",
            border: regStatus === "open"
              ? "1px solid rgba(74,222,128,0.3)"
              : "1px solid rgba(255,107,107,0.3)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            minWidth: "220px"
          }}
        >
          {/* Status Text */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "13px",
                color: "#A8B0C0",
                letterSpacing: "1px",
                marginBottom: "6px"
              }}
            >
              Registrations are
            </p>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: regStatus === "open" ? "#4ade80" : "#ff6b6b",
                letterSpacing: "2px",
                textTransform: "uppercase"
              }}
            >
              {regStatus === "open" ? "🟢 OPEN" : "🔴 CLOSED"}
            </p>
          </div>

          {/* Toggle Switch */}
          <div
            onClick={!toggling ? toggleRegStatus : undefined}
            style={{
              width: "64px",
              height: "34px",
              borderRadius: "17px",
              background: regStatus === "open"
                ? "rgba(74,222,128,0.3)"
                : "rgba(255,107,107,0.3)",
              border: regStatus === "open"
                ? "1px solid rgba(74,222,128,0.5)"
                : "1px solid rgba(255,107,107,0.5)",
              position: "relative",
              cursor: toggling ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              opacity: toggling ? 0.5 : 1
            }}
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: regStatus === "open" ? "#4ade80" : "#ff6b6b",
                position: "absolute",
                top: "3px",
                left: regStatus === "open" ? "34px" : "3px",
                transition: "all 0.3s ease",
                boxShadow: regStatus === "open"
                  ? "0 0 12px rgba(74,222,128,0.5)"
                  : "0 0 12px rgba(255,107,107,0.5)"
              }}
            />
          </div>

          <p
            style={{
              fontSize: "11px",
              color: "#A8B0C0",
              letterSpacing: "1px",
              opacity: 0.6
            }}
          >
            Click to {regStatus === "open" ? "close" : "open"}
          </p>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <p style={{ color: "#A8B0C0", fontSize: "16px" }}>
          Loading registrations...
        </p>
      )}

      {/* No Data */}
      {!loading && registrations.length === 0 && (
        <p style={{ color: "#A8B0C0", fontSize: "16px" }}>
          No registrations yet.
        </p>
      )}

      {/* Registrations Table */}
      {!loading && registrations.length > 0 && (
        <div
          style={{
            overflowX: "auto",
            borderRadius: "20px",
            border: "1px solid rgba(124,92,255,0.2)",
            background: "rgba(255,255,255,0.03)"
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px"
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid rgba(124,92,255,0.2)"
                }}
              >
                {[
                  "Name",
                  "Email",
                  "Phone",
                  "College",
                  "Enrollment",
                  "Event",
                  "Team Name",
                  "Team Count",
                  "Team Members",
                  "Date",
                  "Action"
                ].map((header) => (
                  <th
                    key={header}
                    style={{
                      padding: "16px 14px",
                      textAlign: "left",
                      color: "#7C5CFF",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg) => (
                <tr
                  key={reg.id}
                  style={{
                    borderBottom:
                      "1px solid rgba(255,255,255,0.05)"
                  }}
                >
                  <td style={{ padding: "14px", color: "#E8ECF1" }}>
                    {reg.name}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.email}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.phone}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.college}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.enrollment}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.event}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.teamName || "-"}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.teamCount}
                  </td>
                  <td style={{ padding: "14px", color: "#A8B0C0" }}>
                    {reg.teamMembers &&
                    reg.teamMembers.length > 0
                      ? reg.teamMembers.join(", ")
                      : "-"}
                  </td>
                  <td
                    style={{
                      padding: "14px",
                      color: "#A8B0C0",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {reg.registeredAt
                      ? new Date(
                          reg.registeredAt
                        ).toLocaleDateString()
                      : "-"}
                  </td>
                  <td style={{ padding: "14px" }}>
                    <button
                      onClick={() => handleDelete(reg.id)}
                      style={{
                        padding: "6px 16px",
                        background:
                          "rgba(255,107,107,0.15)",
                        color: "#ff6b6b",
                        border:
                          "1px solid rgba(255,107,107,0.3)",
                        borderRadius: "14px",
                        cursor: "pointer",
                        fontSize: "12px"
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}