import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdditiveBlending, BackSide } from 'three'
import type { Mesh } from 'three'

export function GlobeMesh() {
  const wireframe = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (wireframe.current) {
      wireframe.current.rotation.y = clock.elapsedTime * 0.08
    }
  })

  return (
    <group>
      {/* Core sphere — rich purple gradient look */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhysicalMaterial
          color="#7c3aed"
          roughness={0.6}
          metalness={0.3}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          emissive="#4c1d95"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Inner glow layer */}
      <mesh>
        <sphereGeometry args={[2.005, 64, 64]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Wireframe grid — bright, visible */}
      <mesh ref={wireframe}>
        <sphereGeometry args={[2.015, 48, 32]} />
        <meshBasicMaterial color="#c4b5fd" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Atmosphere ring — outer glow */}
      <mesh scale={2.25}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.08}
          side={BackSide}
          blending={AdditiveBlending}
        />
      </mesh>

      {/* Second atmosphere — wider, softer */}
      <mesh scale={2.45}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#c4b5fd"
          transparent
          opacity={0.04}
          side={BackSide}
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  )
}
