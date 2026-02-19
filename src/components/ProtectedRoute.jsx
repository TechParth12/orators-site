import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setChecking(false)
    })

    return () => unsubscribe()
  }, [])

  if (checking) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#7C5CFF",
          fontSize: "18px",
          fontFamily: "sans-serif"
        }}
      >
        Checking authentication...
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin" />
  }

  return children
}