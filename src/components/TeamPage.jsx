import Navbar from "./Navbar"
import StarBackground from "./StarBackground"
import Faculty from "./Faculty"
import Team from "./Team"
import Footer from "./Footer"

export default function TeamPage() {
  return (
    <div>
      <StarBackground />
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        <Faculty />
        <Team />
      </div>

      <Footer />
    </div>
  )
}