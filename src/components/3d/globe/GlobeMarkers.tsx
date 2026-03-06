import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdditiveBlending } from 'three'
import type { InstancedMesh } from 'three'
import { Object3D } from 'three'
import { COUNTRY_COORDS, latLngToVector3 } from './countryData'

const dummy = new Object3D()
const COUNT = COUNTRY_COORDS.length

export function GlobeMarkers() {
  const dots = useRef<InstancedMesh>(null)
  const glows = useRef<InstancedMesh>(null)

  const positions = useMemo(
    () => COUNTRY_COORDS.map(([lat, lng]) => latLngToVector3(lat, lng, 2.04)),
    []
  )

  useFrame(({ clock }) => {
    if (!dots.current || !glows.current) return
    const t = clock.elapsedTime
    for (let i = 0; i < COUNT; i++) {
      const [x, y, z] = positions[i]
      dummy.position.set(x, y, z)

      // Pulsing dot
      const pulse = 0.8 + Math.sin(t * 2.5 + i * 0.7) * 0.2
      dummy.scale.setScalar(0.04 * pulse)
      dummy.updateMatrix()
      dots.current.setMatrixAt(i, dummy.matrix)

      // Glow halo — larger, synced
      dummy.scale.setScalar(0.12 * pulse)
      dummy.updateMatrix()
      glows.current.setMatrixAt(i, dummy.matrix)
    }
    dots.current.instanceMatrix.needsUpdate = true
    glows.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      {/* Bright dot cores */}
      <instancedMesh ref={dots} args={[undefined, undefined, COUNT]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial color="#ffffff" />
      </instancedMesh>

      {/* Glow halos around each dot */}
      <instancedMesh ref={glows} args={[undefined, undefined, COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.5}
          blending={AdditiveBlending}
        />
      </instancedMesh>
    </>
  )
}
