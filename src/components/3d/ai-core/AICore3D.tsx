import { Canvas3D } from '../shared/Canvas3D'
import { CrystalSphere } from './CrystalSphere'
import { OrbitingParticles } from './OrbitingParticles'
import { AICoreFallback } from './AICoreFallback'

export function AICore3D() {
  return (
    <Canvas3D
      fallback={<AICoreFallback />}
      className="absolute inset-0 rounded-3xl overflow-hidden"
      minTier="medium"
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#7c3aed" />
      <CrystalSphere />
      <OrbitingParticles />
    </Canvas3D>
  )
}
