import { OrbitControls } from '@react-three/drei'
import { Canvas3D } from '../shared/Canvas3D'
import { GlobeMesh } from './GlobeMesh'
import { GlobeMarkers } from './GlobeMarkers'
import { GlobeFallback } from './GlobeFallback'

export function Globe3D() {
  return (
    <Canvas3D
      fallback={<GlobeFallback />}
      className="relative w-full aspect-square max-w-[380px] mx-auto"
      minTier="medium"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-4, -2, 4]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[3, 4, -3]} intensity={0.8} color="#8b5cf6" />
      <GlobeMesh />
      <GlobeMarkers />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.7}
      />
    </Canvas3D>
  )
}
