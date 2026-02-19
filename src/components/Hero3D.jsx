import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text3D, Center } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"

function OratorsText({ scrollY }) {
  const ref = useRef()
  const { viewport } = useThree()

  // Responsive size based on screen width
  const textSize = viewport.width < 6 ? 0.5 : viewport.width < 10 ? 0.8 : 1.3

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.y += (scrollY * 0.5 - ref.current.rotation.y) * 0.05
    ref.current.position.y = Math.sin(scrollY * 3) * 0.1
  })

  return (
    <Center>
      <Text3D
        ref={ref}
        font="/fonts/helvetiker_regular.typeface.json"
        size={textSize}
        height={0.25}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.01}
      >
        ORATORS
        <meshPhysicalMaterial
          color="#ffbe76"
          transmission={1}
          roughness={0.05}
          thickness={2}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Text3D>
    </Center>
  )
}

export default function Hero3D() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight)

      setScrollY(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          color="#ffffff"
        />

        <pointLight
          position={[-3, 2, 3]}
          intensity={3}
          color="#ff9e4d"
        />

        <pointLight
          position={[0, -3, -5]}
          intensity={2}
          color="#7C5CFF"
        />

        <OratorsText scrollY={scrollY} />

      </Canvas>
    </div>
  )
}