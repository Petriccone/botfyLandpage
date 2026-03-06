import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import type { InstancedMesh } from 'three'
import { Object3D, MathUtils } from 'three'

const COUNT = 80
const dummy = new Object3D()

export function ParticleField() {
  const mesh = useRef<InstancedMesh>(null)

  const particles = useMemo(() =>
    Array.from({ length: COUNT }, () => ({
      x: MathUtils.randFloatSpread(12),
      y: MathUtils.randFloatSpread(8),
      z: MathUtils.randFloat(-6, -1),
      speed: MathUtils.randFloat(0.001, 0.004),
      offset: MathUtils.randFloat(0, Math.PI * 2),
    })),
  [])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.elapsedTime
    for (let i = 0; i < COUNT; i++) {
      const p = particles[i]
      dummy.position.set(
        p.x + Math.sin(t * p.speed * 100 + p.offset) * 0.3,
        p.y + Math.cos(t * p.speed * 80 + p.offset) * 0.2,
        p.z
      )
      dummy.scale.setScalar(MathUtils.randFloat(0.02, 0.04))
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    }
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#c4b5fd" transparent opacity={0.4} />
    </instancedMesh>
  )
}
