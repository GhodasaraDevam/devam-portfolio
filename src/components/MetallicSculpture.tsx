import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Sculpture() {
  const meshRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.15,
        0.05
      )
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        mousePosition.x * 0.15,
        0.05
      )
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={meshRef}>
        {/* Main torus knot - premium chrome */}
        <mesh>
          <torusKnotGeometry args={[1.4, 0.35, 150, 40]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.98}
            roughness={0.05}
            envMapIntensity={2.0}
          />
        </mesh>

        {/* Outer orbit ring - orange accent */}
        <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
          <torusGeometry args={[2.3, 0.06, 80, 120]} />
          <meshStandardMaterial
            color="#F36B32"
            metalness={0.85}
            roughness={0.15}
            emissive="#F36B32"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Middle ring - metallic */}
        <mesh rotation={[Math.PI / 3, 0.3, 0.1]}>
          <torusGeometry args={[1.9, 0.1, 80, 120]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.92}
            roughness={0.1}
          />
        </mesh>

        {/* Inner curved ring */}
        <mesh rotation={[Math.PI / 4, -0.2, 0.3]}>
          <torusGeometry args={[1.6, 0.08, 64, 100]} />
          <meshStandardMaterial
            color="#2a2a2a"
            metalness={0.9}
            roughness={0.12}
          />
        </mesh>

        {/* Floating accent spheres */}
        <mesh position={[2.8, 0.8, 0.2]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial
            color="#F36B32"
            metalness={0.85}
            roughness={0.15}
            emissive="#F36B32"
            emissiveIntensity={0.25}
          />
        </mesh>

        <mesh position={[-2.5, -0.6, 0.3]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial
            color="#F36B32"
            metalness={0.85}
            roughness={0.15}
            emissive="#F36B32"
            emissiveIntensity={0.25}
          />
        </mesh>

        <mesh position={[0.5, 2.6, -0.2]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial
            color="#F36B32"
            metalness={0.85}
            roughness={0.15}
            emissive="#F36B32"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Geometric accent - octahedron */}
        <mesh position={[0, 2.8, 0]} rotation={[0.3, 0, Math.PI / 4]}>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color="#F36B32"
            metalness={0.85}
            roughness={0.15}
            emissive="#F36B32"
            emissiveIntensity={0.35}
          />
        </mesh>
      </group>
    </Float>
  )
}

export default function MetallicSculpture() {
  return (
    <div className="sculpture-container">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#101010']} />
        <ambientLight intensity={0.25} />
        <pointLight position={[8, 8, 8]} intensity={1.2} color="#F36B32" />
        <pointLight position={[-8, -8, -8]} intensity={0.6} color="#3a3a3a" />
        <spotLight
          position={[0, 12, 6]}
          angle={0.4}
          penumbra={0.8}
          intensity={1.0}
          color="#F36B32"
        />
        <Sculpture />
        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}
