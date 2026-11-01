
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'

function Orb() {
  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh>
        <icosahedronGeometry args={[1.25, 64]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          roughness={0.12}
          metalness={0.65}
          distort={0.38}
          speed={2}
        />
      </mesh>

      <mesh rotation={[1.1, 0.3, 0.5]} scale={1.45}>
        <torusGeometry args={[1, 0.008, 16, 160]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.65} />
      </mesh>
    </Float>
  )
}

export default function ThreeDOrb() {
  return (
    <div className="orb-canvas">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <pointLight position={[3, 3, 3]} intensity={35} color="#8b5cf6" />
        <pointLight position={[-3, -2, 2]} intensity={25} color="#38bdf8" />

        <Orb />

        <Sparkles
          count={65}
          scale={4}
          size={2}
          speed={0.25}
          opacity={0.55}
          color="#a78bfa"
        />
      </Canvas>
    </div>
  )
}
