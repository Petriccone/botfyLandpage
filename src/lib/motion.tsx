/**
 * Motion proxy — on mobile, renders plain HTML elements with zero
 * framer-motion overhead (no Intersection Observers, no JS animations).
 * On desktop, passes through to the real framer-motion.
 */
import React from 'react'
import { motion as fMotion } from 'framer-motion'

const isMobile =
  typeof window !== 'undefined' &&
  (window.innerWidth < 768 ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent))

// Props that are framer-motion specific and should be stripped on mobile
const MOTION_PROPS = new Set([
  'initial',
  'animate',
  'exit',
  'whileInView',
  'whileHover',
  'whileTap',
  'whileDrag',
  'whileFocus',
  'viewport',
  'transition',
  'variants',
  'layout',
  'layoutId',
  'onViewportEnter',
  'onViewportLeave',
  'onAnimationStart',
  'onAnimationComplete',
])

function stripMotionProps(props: Record<string, unknown>) {
  const clean: Record<string, unknown> = {}
  for (const key in props) {
    if (!MOTION_PROPS.has(key)) {
      clean[key] = props[key]
    }
  }
  return clean
}

const componentCache = new Map<string, React.FC<any>>()

function getMobileComponent(tag: string): React.FC<any> {
  const existing = componentCache.get(tag)
  if (existing) return existing
  const comp: React.FC<any> = React.forwardRef((props: any, ref: any) => {
    return React.createElement(tag, { ...stripMotionProps(props), ref })
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
