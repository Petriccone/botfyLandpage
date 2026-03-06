import { Canvas3D } from '../shared/Canvas3D'
import { useMousePosition } from '../shared/useMousePosition'
import { FloatingShapes } from './FloatingShapes'
import { ParticleField } from './ParticleField'
import { HeroFallback } from './HeroFallback'

export function HeroBackground3D() {
  const mouse = useMousePosition()

  return (
    <Canvas3D
      fallback={<HeroFallback />}
      className="absolute inset-0 pointer-events-none"
      minTier="medium"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <FloatingShapes mouse={mouse} />
      <ParticleField />
    </Canvas3D>
  )
}
