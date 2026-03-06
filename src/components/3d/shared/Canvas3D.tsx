import React, { Suspense, useEffect, useRef, useState, type ReactNode } from 'react'
import { useDeviceCapability, type DeviceTier } from './useDeviceCapability'

const LazyCanvas = React.lazy(() =>
  import('@react-three/fiber').then((m) => ({ default: m.Canvas }))
)

class ErrorBoundary extends React.Component<
  { fallback: ReactNode; children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

interface Canvas3DProps {
  children: ReactNode
  fallback: ReactNode
  className?: string
  /** Override tier detection */
  minTier?: DeviceTier
}

export function Canvas3D({ children, fallback, className = '', minTier = 'medium' }: Canvas3DProps) {
  const tier = useDeviceCapability()
  const [visible, setVisible] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const tiers: DeviceTier[] = ['low', 'medium', 'high']
  const shouldRender3D = tiers.indexOf(tier) >= tiers.indexOf(minTier)

  useEffect(() => {
    if (!shouldRender3D || !sentinelRef.current) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { rootMargin: '200px' }
    )
    io.observe(sentinelRef.current)
    return () => io.disconnect()
  }, [shouldRender3D])

  if (!shouldRender3D) return <>{fallback}</>

  return (
    <div ref={sentinelRef} className={className}>
      {visible ? (
        <ErrorBoundary fallback={fallback}>
          <Suspense fallback={fallback}>
            <LazyCanvas
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              {children}
            </LazyCanvas>
          </Suspense>
        </ErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  )
}
