/**
 * Motion proxy — on mobile, keeps framer-motion animations but removes
 * whileInView/viewport (IntersectionObservers) which cause scroll jank.
 * Elements that used whileInView get converted to animate (runs once on mount).
 * On desktop, passes through to real framer-motion unchanged.
 */
import React from 'react'
import { motion as fMotion } from 'framer-motion'

const isMobile =
  typeof window !== 'undefined' &&
  (window.innerWidth < 768 ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent))

// Only strip props that create IntersectionObservers
const SCROLL_PROPS = new Set([
  'whileInView',
  'viewport',
  'onViewportEnter',
  'onViewportLeave',
])

function convertProps(props: Record<string, unknown>) {
  const clean: Record<string, unknown> = {}
  for (const key in props) {
    if (!SCROLL_PROPS.has(key)) {
      clean[key] = props[key]
    }
  }
  // If element used whileInView but has no animate, use whileInView value as animate
  if (props.whileInView && !props.animate) {
    clean.animate = props.whileInView
  }
  return clean
}

const componentCache = new Map<string, React.FC<any>>()

function getMobileComponent(tag: string): React.FC<any> {
  const existing = componentCache.get(tag)
  if (existing) return existing
  const real = (fMotion as any)[tag]
  const comp: React.FC<any> = React.forwardRef((props: any, ref: any) => {
    return React.createElement(real, { ...convertProps(props), ref })
  }) as any
  ;(comp as any).displayName = `m.${tag}`
  componentCache.set(tag, comp)
  return comp
}

export const motion: typeof fMotion = isMobile
  ? new Proxy(fMotion, {
      get(_target, prop: string) {
        return getMobileComponent(prop)
      },
    })
  : fMotion
