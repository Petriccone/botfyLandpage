import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import type { Group } from 'three'

const shapes = [
  { geo: 'sphere', pos: [-3, 1.5, -2] as const, scale: 0.6, speed: 1.2 },
  { geo: 'torus', pos: [3.5, -1, -3] as const, scale: 0.5, speed: 0.9 },
  { geo: 'icosahedron', pos: [-2, -1.8, -1.5] as const, scale: 0.4, speed: 1.1 },
  { geo: 'sphere', pos: [2, 2, -4] as const, scale: 0.35, speed: 1.4 },
  { geo: 'torus', pos: [-4, 0.5, -3.5] as const, scale: 0.3, speed: 0.8 },
]

function GlassShape({ geo, pos, scale, speed }: typeof shapes[number]) {
  const geometry =
    geo === 'sphere' ? <sphereGeometry args={[1, 32, 32]} /> :
    geo === 'torus' ? <torusGeometry args={[1, 0.4, 16, 32]} /> :
    <icosahedronGeometry args={[1, 1]} />

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={[pos[0], pos[1], pos[2]]} scale={scale}>
        {geometry}
        <MeshTransmissionMaterial
          backside
          thickness={0.3}
          roughness={0.1}
          transmission={0.95}
          ior={1.5}
          chromaticAberration={0.03}
          color="#c4b5fd"
        />
      </mesh>
    </Float>
  )
}

interface FloatingShapesProps {
  mouse: React.RefObject<{ x: number; y: number }>
}

export function FloatingShapes({ mouse }: FloatingShapesProps) {
  const group = useRef<Group>(null)

  useFrame(() => {
    if (!group.current || !mouse.current) return
    group.current.rotation.y += (mouse.current.x * 0.05 - group.current.rotation.y) * 0.02
    group.current.rotation.x += (mouse.current.y * 0.03 - group.current.rotation.x) * 0.02
  })

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <GlassShape key={i} {...s} />
      ))}
    </group>
  )
}
