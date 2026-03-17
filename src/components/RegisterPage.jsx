import Navbar from "./Navbar"
import StarBackground from "./StarBackground"
import Register from "./Register"
import Footer from "./Footer"

export default function RegisterPage() {
  return (
    <div>
      <StarBackground />
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        <Register />
      </div>

      <Footer />
    </div>
  )
}