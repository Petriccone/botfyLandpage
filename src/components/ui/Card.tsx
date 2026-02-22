import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm ${
        hover ? 'transition-all duration-300 hover:bg-white/[0.06] hover:border-purple-500/30' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
