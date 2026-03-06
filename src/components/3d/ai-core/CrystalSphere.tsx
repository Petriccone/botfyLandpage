import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import type { Mesh } from 'three'

export function CrystalSphere() {
  const mesh = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.rotation.y = clock.elapsedTime * 0.15
    mesh.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.2, 4]} />
      <MeshDistortMaterial
        color="#7c3aed"
        emissive="#7c3aed"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        distort={0.25}
        speed={2}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}
