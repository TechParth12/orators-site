import { useState, useEffect } from "react"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { signOut } from "firebase/auth"
import { db, auth } from "../firebase"
import { useNavigate } from "react-router-dom"

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchRegistrations()
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

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >
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