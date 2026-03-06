import { useMemo } from 'react'

export type DeviceTier = 'high' | 'medium' | 'low'

export function useDeviceCapability(): DeviceTier {
  return useMemo(() => {
    if (typeof window === 'undefined') return 'low'

    // Respect reduced-motion preference
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return 'low'

    // Mobile detection
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      || (navigator.maxTouchPoints > 1 && window.innerWidth < 1024)

    if (isMobile) return 'low'

    // Check for WebGL2 support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      if (!gl) return 'low'

      // Check GPU renderer for known low-end GPUs
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase()
        if (renderer.includes('intel') && !renderer.includes('iris')) return 'medium'
        if (renderer.includes('swiftshader') || renderer.includes('llvmpipe')) return 'low'
      }

      return 'high'
    } catch {
      return 'low'
    }
  }, [])
}
