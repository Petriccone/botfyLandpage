import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import type { InstancedMesh } from 'three'
import { Object3D } from 'three'

const COUNT = 10
const dummy = new Object3D()

export function OrbitingParticles() {
  const mesh = useRef<InstancedMesh>(null)

  const orbits = useMemo(() =>
    Array.from({ length: COUNT }, (_, i) => ({
      radiusX: 1.6 + Math.random() * 0.6,
      radiusY: 1.4 + Math.random() * 0.4,
      speed: 0.3 + Math.random() * 0.4,
      offset: (i / COUNT) * Math.PI * 2,
      tilt: (Math.random() - 0.5) * 0.5,
    })),
  [])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.elapsedTime
    for (let i = 0; i < COUNT; i++) {
      const o = orbits[i]
      const angle = t * o.speed + o.offset
      dummy.position.set(
        Math.cos(angle) * o.radiusX,
        Math.sin(angle) * o.tilt + Math.sin(angle * 0.5) * 0.3,
        Math.sin(angle) * o.radiusY
      )
      dummy.scale.setScalar(0.06)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    }
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#c4b5fd" transparent opacity={0.8} />
    </instancedMesh>
  )
}
