import { useEffect, useRef } from "react"

export default function StarBackground() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Create stars
    const stars = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: Math.random() * 0.02 + 0.005,
        opacity: Math.random()
      })
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height)

      stars.forEach((star) => {
        // Twinkle
        star.opacity += star.speed
        if (star.opacity >= 1 || star.opacity <= 0) {
          star.speed = -star.speed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -0,
        background: "#000000",
        pointerEvents: "none"
      }}
    />
  )
}